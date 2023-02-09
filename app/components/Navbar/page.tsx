import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between space-x-4">
      <div className='space-x-4 bg-[#093cd4]'>
        <a href="/">About</a>
      </div>
      <div>
        <a href="/">Test</a>
        <a href="/">Test</a>
        <a href="/">Test</a>
      </div>
    </nav>
  );
}

export default Navbar