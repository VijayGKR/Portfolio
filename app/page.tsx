import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Background3D from "./components/Background3D";

export default function Home() {
  return (
    <>
      <Background3D />
      <main className="flex-1 p-8 text-white font-['Times_New_Roman'] relative h-screen bg-black">
        <nav className="absolute top-0 left-0 right-0 flex justify-center py-4">
          <ul className="flex space-x-16">
            <li><a href="/about" className="text-xl hover:text-blue-400 transition duration-300">About</a></li>
            <li><a href="/projects" className="text-xl hover:text-blue-400 transition duration-300">Projects</a></li>
            <li><a href="/blog" className="text-xl hover:text-blue-400 transition duration-300">Blog</a></li>
          </ul>
        </nav>
        <div className="max-w-5xl mx-auto w-full h-full flex flex-col justify-between">
          <h1 className="text-8xl font-bold mt-14 ml-[-150px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Hi, I'm Vijay
          </h1>
          <p className="text-2xl mb-[120px] mr-[-150px] text-gray-300 self-end text-right max-w-md">
            Junior at U.S.C. studying math and computer science. Passionate about building new things.
          </p>
        </div>
      </main>
      <footer className="text-white py-4 text-center fixed bottom-0 left-0 right-0">
        <p className="text-gray-600">Built by Vijay Kumaravelrajan</p>
        <div className="mt-2">
          <a
            href="https://www.linkedin.com/in/vijay-kumaravel-rajan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 mx-2"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/vijay-kr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 mx-2"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}

