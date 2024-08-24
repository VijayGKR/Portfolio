import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'Jargon',
    description: 'A chrome extension to turn your browsing into language learning, as well as companion website.',
    link: 'https://jargonlearn.com',
    thumbnail: '/jargon.png',
  },
  {
    title: 'LLM-Peer-Review',
    description: 'A better interface to edit text with LLMs',
    link: 'https://llm-peer-review.com',
    thumbnail: '/llm-peer-review.png',
  },
  {
    title: 'Portfolio',
    description: 'My personal website',
    link: "/",
    thumbnail: '/portfolio.png',
  },
];

export default function Projects() {
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
        </ul>
      </nav>
      <div className="max-w-3xl mx-auto pt-16 sm:pt-0">
        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <Link href={project.link} key={index}>
              <div className="border border-gray-700 p-4 sm:p-6 rounded-lg hover:bg-gray-900 transition duration-300 flex flex-col sm:flex-row justify-between items-center mt-10">
                <div className="flex-grow pr-0 sm:pr-4 mb-4 sm:mb-0 text-center sm:text-left">
                  <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4">{project.title}</h2>
                  <p className="text-gray-400 text-sm sm:text-base">{project.description}</p>
                </div>
                <div className="w-full sm:w-[100px] h-[100px] sm:flex-shrink-0">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    width={150}
                    height={150}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}