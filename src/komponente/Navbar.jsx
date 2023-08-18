import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Početna</a></li>
        <li><a href="/recepti">Recepti</a></li>
        <li><a href="/omiljeni">Omiljeni</a></li>
        <li><a href="/napravi-recept">Napravi recept</a></li>

      </ul>
    </nav>
  );
};

export default Navbar;