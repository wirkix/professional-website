import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-brand-50 text-brand-950 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center">
          <Link href="/" className="text-brand-700 font-medium hover:text-brand-900">
            Inicio
          </Link>
          <span className="mx-4 text-brand-300">/</span>
          <Link href="/cv" className="text-brand-700 font-medium hover:text-brand-900">
            CV
          </Link>
          <span className="mx-4 text-brand-300">/</span>
          <Link href="/portfolio" className="text-brand-700 font-medium hover:text-brand-900">
            Portafolio
          </Link>
        </div>
        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/in/alois-wirkes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-500 font-medium hover:text-brand-500"
          >
            LinkedIn
          </a>
          <span className="mx-4 text-brand-300">/</span>
          <a
            href="https://www.upwork.com/freelancers/~01e9f20bfb142f07cb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-500 font-medium hover:text-brand-500"
          >
            Upwork
          </a>
          <span className="mx-4 text-brand-300">/</span>
          <a
            href="https://github.com/wirkix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-500 font-medium hover:text-brand-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Header;
