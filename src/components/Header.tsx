import React from 'react';

const Header = () => {
  return (
    <nav className="bg-brand-50 text-brand-950 p-4">
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
    </nav>
  );
};
export default Header;
