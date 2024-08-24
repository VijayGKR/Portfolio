import Link from 'next/link';

export default function Blog() {
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
      <div className="max-w-3xl mx-auto flex items-center justify-center h-screen pt-16 sm:pt-0">
        <h1 className="text-xl xs:text-2xl sm:text-4xl text-center">Coming Soon.</h1>
      </div>
    </main>
  );
}
