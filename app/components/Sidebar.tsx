import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resume', path: '/resume' },
  ];

  return (
    <nav className="w-64 bg-gray-800 h-screen p-4">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.path} className="text-white hover:text-gray-300 block py-2 px-4 rounded transition duration-200">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
