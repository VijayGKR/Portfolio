import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Background3D from "./components/Background3D";

export default function Home() {
  return (
    <>
      <Background3D />
      <main className="flex-1 p-8 text-white font-['Times_New_Roman']">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Hi, I'm Vijay
          </h1>
          <p className="text-xl mb-12 text-gray-300">
            Junior at U.S.C. studying math and computer science. Passionate about building new things.
          </p>
          <nav className="flex justify-center ">
            <ul className="flex space-x-12">
              <li><a href="/" className="text-lg hover:text-blue-400 transition duration-300">Home</a></li>
              <li><a href="/about" className="text-lg hover:text-blue-400 transition duration-300">About</a></li>
              <li><a href="/projects" className="text-lg hover:text-blue-400 transition duration-300">Projects</a></li>
              <li><a href="/blog" className="text-lg hover:text-blue-400 transition duration-300">Blog</a></li>
              <li><a href="/resume" className="text-lg hover:text-blue-400 transition duration-300">Resume</a></li>
            </ul>
          </nav>
        </div>
      </main>
      <footer className="text-white py-4 text-center fixed bottom-0 left-0 right-0">
        <p>Built by Vijay Kumaravelrajan</p>
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

