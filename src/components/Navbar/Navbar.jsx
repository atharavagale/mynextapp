"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav style={{ backgroundColor: '#37517e', height: '80px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image className="hamb" src="/hamburg.svg" alt="Menu" width={50} height={50} onClick={() => setShowMenu(!showMenu)} />
        <Image src="/pofileimg.jpeg" alt="Profile" width={50} height={50} style={{ borderRadius: '50%' }} />
        <div className="txt" style={{ marginLeft: '0.7rem', fontWeight: 'bold' }}>JustAtharav</div>
      </div>
      <div className={`right ${showMenu ? 'active' : ''}`} style={{ display: 'flex' }}>
        <ul style={{ display: 'flex', listStyle: 'none', color: 'white' }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Me</Link></li>
          <li><Link href="/contact">ContactMe</Link></li>
          <li><Link href="/questions">Questions?</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
