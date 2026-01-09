import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume - Vijay Kumaravelrajan',
  description: 'View the resume of Vijay Kumaravelrajan.',
};

export default function Resume() {
  return (
    <main className="min-h-screen bg-black text-white font-serif p-4 sm:p-8">
      <nav className="fixed left-0 top-0 sm:top-1/2 sm:-translate-y-1/2 w-full sm:w-auto sm:h-auto flex sm:flex-col justify-center items-center sm:items-start z-10 bg-black bg-opacity-70 sm:bg-opacity-0">
        <ul className="flex sm:flex-col space-x-4 sm:space-x-0 sm:space-y-8 p-4 sm:p-6">
          <li>
            <Link href="/" className="text-white hover:text-gray-300 transition duration-300 text-sm sm:text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-300 transition duration-300 text-sm sm:text-lg">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-white hover:text-gray-300 transition duration-300 text-sm sm:text-lg">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-white hover:text-gray-300 transition duration-300 text-sm sm:text-lg">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/resume" className="text-white hover:text-gray-300 transition duration-300 text-sm sm:text-lg">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
      <div className="max-w-5xl mx-auto pt-16 sm:pt-0 h-screen">
        <object
          data="/resume.pdf"
          type="application/pdf"
          className="w-full h-full"
          title="Vijay Kumaravelrajan's Resume"
          aria-label="Resume PDF viewer"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-xl mb-4">Unable to display PDF.</p>
            <a
              href="/resume.pdf"
              download
              className="text-blue-400 hover:text-blue-300 underline text-lg"
            >
              Download Resume (PDF)
            </a>
          </div>
        </object>
      </div>
    </main>
  );
}
