import React from 'react';

const Header = () => {
  return (
    <nav className="bg-brand-50 text-brand-950 p-4">
      <a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-500 font-medium hover:text-brand-500"
      >
        LinkedIn
      </a>
      <span className="mx-4 text-brand-300">/</span>
      <a
        href="https://www.upwork.com/freelancer/profile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-brand-500 font-medium hover:text-brand-500"
      >
        Upwork
      </a>
      <span className="mx-4 text-brand-300">/</span>
      <a
        href="https://github.com/your-github-profile"
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