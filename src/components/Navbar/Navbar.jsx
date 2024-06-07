"use client";
import { useState } from 'react';


import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css'; 
import RightSubMenu from './RightSubMenu';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.left} ${styles.dflex}`}>
        <Image className="hamb" src="/hamburg.svg" alt="Menu" width={50} height={50} onClick={() => setShowMenu(!showMenu)} />
        <div className={`${styles.logo}`}>
        <Image src="/pofileimg.jpeg" alt="Profile" width={50} height={50} className={styles.profile} />
        <div className={`${styles.txt} ${styles.txtBold} ${styles.margin}`}>JustAtharav</div>
        </div>
      </div>
      <RightSubMenu isOpen={showMenu} setIsOpen={setShowMenu} />
      <div className={`right ${showMenu ? styles.active : ''}`}>

        <ul>
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
