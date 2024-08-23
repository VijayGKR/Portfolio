"use client"
import React, { useMemo, useRef, useState, useCallback, Suspense, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { PointOctree } from 'sparse-octree'
import dynamic from 'next/dynamic'

const OrbitControls = dynamic(() => import('@react-three/drei').then((mod) => mod.OrbitControls), { ssr: false })

const DISTRIBUTION_DISTANCE = 0.2
const MAX_POINTS = 10000
const DISPLAY_DELAY = 0.05
const GENERATION_PER_FRAME = 50
const FAILED_ATTEMPTS_THRESHOLD = 40000

const generateUnitVector = () => {
  const theta = 2 * Math.PI * Math.random()
  const phi = Math.acos(2 * Math.random() - 1)
  return new THREE.Vector3(
    Math.sin(phi) * Math.cos(theta),
    Math.sin(phi) * Math.sin(theta),
    Math.cos(phi)
  )
}

const StreamingVertices = () => {
  const octreeRef = useRef(new PointOctree(new THREE.Vector3(-1, -1, -1), new THREE.Vector3(1, 1, 1)))
  const [displayedPoints, setDisplayedPoints] = useState([])
  const generatedPointsRef = useRef([])
  const lastDisplayTimeRef = useRef(0)
  const failedAttemptsRef = useRef(0)
  const [rainbowEffect, setRainbowEffect] = useState(false)

  const colorRef = useRef(new Float32Array(MAX_POINTS * 3))
  const colorAttribRef = useRef(null)


  useEffect(() => {
    if (rainbowEffect) {
      console.log("Rainbow effect activated")
    }
  }, [rainbowEffect])

  useFrame((state) => {
    const currentTime = state.clock.getElapsedTime()

    // Generate new points
    if (generatedPointsRef.current.length < MAX_POINTS && !rainbowEffect) {
      let attemptsMade = 0
      while (attemptsMade < GENERATION_PER_FRAME && generatedPointsRef.current.length < MAX_POINTS) {
        const newPoint = generateUnitVector()
        const nearbyPoints = octreeRef.current.findPoints(newPoint, DISTRIBUTION_DISTANCE)

        if (nearbyPoints.length === 0) {
          generatedPointsRef.current.push(newPoint)
          octreeRef.current.set(newPoint, newPoint)
          failedAttemptsRef.current = 0
        } else {
          failedAttemptsRef.current++
          if (failedAttemptsRef.current >= FAILED_ATTEMPTS_THRESHOLD) {
            console.log("Failed attempts threshold reached:", failedAttemptsRef.current)
            setRainbowEffect(true)
          }
        }
        attemptsMade++
      }
    }

    // Display points gradually
    if (currentTime - lastDisplayTimeRef.current >= DISPLAY_DELAY && displayedPoints.length < generatedPointsRef.current.length) {
      setDisplayedPoints(prev => [...prev, generatedPointsRef.current[prev.length]])
      lastDisplayTimeRef.current = currentTime
    }

  })

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(MAX_POINTS * 3)
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    colorAttribRef.current = new THREE.BufferAttribute(colorRef.current, 3)
    geo.setAttribute('color', colorAttribRef.current)
    return geo
  }, [])

  useFrame(() => {
    const positions = geometry.attributes.position.array
    for (let i = 0; i < displayedPoints.length; i++) {
      const point = displayedPoints[i]
      positions[i * 3] = point.x
      positions[i * 3 + 1] = point.y
      positions[i * 3 + 2] = point.z
    }
    geometry.attributes.position.needsUpdate = true
    geometry.setDrawRange(0, displayedPoints.length)
  })

  return (
    <points geometry={geometry}>
      <pointsMaterial
        color={rainbowEffect ? 'white' : '#ffffff'}
        size={0.02}
        sizeAttenuation={true}
        vertexColors={rainbowEffect}
      />
    </points>
  )
}

const Background3D = () => {
  return (
    <div style={{ position: 'fixed', top: 50, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Canvas camera={{ position: [3, 3, 3], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <StreamingVertices />
          <OrbitControls enableDamping={false} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Background3D), { ssr: false })