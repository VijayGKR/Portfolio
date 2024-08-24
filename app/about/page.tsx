import Image from 'next/image';
import Link from 'next/link';

export default function About() {
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
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-32 h-32 sm:w-48 sm:h-48 relative overflow-hidden rounded-full">
            <Image
              src="/headshot.png"
              alt="Vijay's headshot"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h1>
            <p className="text-base sm:text-lg leading-relaxed">
              Hi! I&apos;m Vijay Kumaravelrajan: currently a junior at the University of Southern California majoring in Applied and Computational Mathematics and Computer Science. I find joy in doing research and building cool projects. 
            </p>
            <p className="text-base sm:text-lg leading-relaxed mt-4">
              You can reach me at <a href="mailto:vijaygkr1@gmail.com" className="break-all">vijaygkr1@gmail.com</a> for any inquiries on projects or collaborations.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
