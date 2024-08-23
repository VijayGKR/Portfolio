import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'Jargon',
    description: 'A brief description of project 1.',
    link: '/projects/project1',
    thumbnail: '/images/jargon-thumbnail.jpg',
  },
  {
    title: 'LLM-Peer-Review',
    description: 'A brief description of project 2.',
    link: '/projects/project2',
    thumbnail: '/images/llm-peer-review-thumbnail.jpg',
  },
  {
    title: 'Portfolio',
    description: 'A brief description of project 3.',
    link: '/projects/project3',
    thumbnail: '/images/portfolio-thumbnail.jpg',
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white font-serif p-8">
      <nav className="fixed left-0 top-0 h-full flex items-center">
        <ul className="space-y-8 p-6">
          <li>
            <Link href="/" className="text-white hover:text-gray-300 transition duration-300 text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-300 transition duration-300 text-lg">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-white hover:text-gray-300 transition duration-300 text-lg">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Link href={project.link} key={index}>
              <div className="border border-gray-700 p-6 rounded-lg hover:bg-gray-900 transition duration-300 mt-10 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                </div>
                <div className="ml-4">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    width={150}
                    height={150}
                    className="rounded-lg"
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
