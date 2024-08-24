"use client"
import React, { useMemo, useRef, useState, useCallback, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { PointOctree } from 'sparse-octree'
import { OrbitControls } from '@react-three/drei'

const DISTRIBUTION_DISTANCE = 0.1
const MAX_POINTS = 10000
const DISPLAY_DELAY = 0.05
const GENERATION_PER_FRAME = 50
const FAILED_ATTEMPTS_THRESHOLD = 20000

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


  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(MAX_POINTS * 3)
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    colorAttribRef.current = new THREE.BufferAttribute(colorRef.current, 3)
    geo.setAttribute('color', colorAttribRef.current)
    return geo
  }, [])

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

    // Update positions and colors
    const positions = geometry.attributes.position.array
    const colors = colorRef.current
    for (let i = 0; i < displayedPoints.length; i++) {
      const point = displayedPoints[i]
      positions[i * 3] = point.x
      positions[i * 3 + 1] = point.y
      positions[i * 3 + 2] = point.z

      if (rainbowEffect) {
        // Add time-based offset to create moving effect
        const offset = currentTime * 0.3 // Adjust this value to control speed
        const hue = ((point.y + 1) / 2 + offset) % 1 // Map y from [-1, 1] to [0, 1] and add offset
        const color = new THREE.Color().setHSL(hue, 1, 0.5)
        colors[i * 3] = color.r
        colors[i * 3 + 1] = color.g
        colors[i * 3 + 2] = color.b
      } else {
        colors[i * 3] = 1 // White color
        colors[i * 3 + 1] = 1
        colors[i * 3 + 2] = 1
      }
    }
    geometry.attributes.position.needsUpdate = true
    colorAttribRef.current.needsUpdate = true
    geometry.setDrawRange(0, displayedPoints.length)
  })

  return (
    <points geometry={geometry}>
      <pointsMaterial
        size={0.06}
        sizeAttenuation={true}
        vertexColors={true}
      />
    </points>
  )
}

const RotatingCamera = () => {
  const { camera } = useThree()
  
  useFrame((state, delta) => {
    camera.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), delta * 0.1)
    camera.lookAt(0, 0, 0)
  })

  return null
}

const Background3D = () => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: '25%', 
      left: '25%', 
      width: '50%', 
      height: '50%', 
      zIndex: 10, 
      backgroundColor: 'black',
      borderRadius: '10px',
      overflow: 'hidden'
    }}>
      <Canvas camera={{ position: [3, 3, 3], fov: 30 }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <StreamingVertices />
          <RotatingCamera />
          <OrbitControls 
            enableDamping={false}
            enableRotate={true}
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Background3D