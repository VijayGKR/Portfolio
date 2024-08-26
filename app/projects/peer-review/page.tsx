import Link from 'next/link';
import Image from 'next/image';

// This is a placeholder. Replace with actual project data or fetch from an API
const project = {
  title: "Jargon",
  description: "A chrome extension to turn your browsing into language learning, as well as companion website.",
  image: "/jargon.png",
  technologies: ["React", "Node.js", "MongoDB"],
  githubLink: null,
  liveLink: "https://jargonlearn.com",
};

export default function ProjectPage() {
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
          <div className="flex items-center space-x-4 mb-4">
            <h1 className="text-3xl sm:text-4xl font-bold">{project.title}</h1>
            <Image
              src={project.image}
              alt={`${project.title} image`}
              width={50}
              height={50}
              className="rounded-lg object-cover"
            />
          </div>
          <p className="text-gray-300 text-base sm:text-lg">{project.description}</p>
          <div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                View on GitHub
              </a>
            )}
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300">
              Link
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
