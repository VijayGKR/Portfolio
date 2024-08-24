import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Background3D from "./components/Background3D";

export default function Home() {
  return (
    <>
      <Background3D />
      <main className="flex-1 p-4 sm:p-8 text-white font-['Times_New_Roman'] relative min-h-screen bg-black">
        <nav className="absolute top-0 left-0 right-0 flex justify-center py-4">
          <ul className="flex space-x-4 sm:space-x-16">
            <li><a href="/about" className="text-lg sm:text-xl hover:text-blue-400 transition duration-300">About</a></li>
            <li><a href="/projects" className="text-lg sm:text-xl hover:text-blue-400 transition duration-300">Projects</a></li>
            <li><a href="/blog" className="text-lg sm:text-xl hover:text-blue-400 transition duration-300">Blog</a></li>
          </ul>
        </nav>
        <div className="max-w-5xl mx-auto w-full h-full flex flex-col justify-between">
          <h1 className="text-5xl sm:text-8xl font-bold mt-20 sm:mt-14 text-center sm:text-left sm:ml-[-150px] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 leading-tight pb-4">
            Hi, I'm Vijay
          </h1>
          <p className="text-lg sm:text-xl mb-20 sm:mb-8 mx-auto sm:mr-[-200px] text-gray-300 text-center sm:text-right max-w-md sm:absolute sm:bottom-20 sm:right-[250px]">
            Junior at U.S.C. studying math and computer science. Passionate about discovering and building new things.
          </p>
        </div>
      </main>
      <footer className="text-white py-4 text-center fixed bottom-0 left-0 right-0 bg-black bg-opacity-70">
        <p className="text-gray-600 text-sm sm:text-base">Built by Vijay Kumaravelrajan</p>
        <div className="mt-2">
          <a
            href="https://www.linkedin.com/in/vijay-kumaravel-rajan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 mx-2 text-sm sm:text-base"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/vijay-kr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 mx-2 text-sm sm:text-base"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
