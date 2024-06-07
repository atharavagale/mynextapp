// RightSubMenu.jsx
import Link from 'next/link';
import Image from 'next/image';

const RightSubMenu = ({ isOpen }) => {
  return (
    <div className="right-sub" style={{ display: isOpen ? 'block' : 'none', background: '#2D9596', position: 'fixed', top: '80px', right: '0', zIndex: 1, borderRadius: '10px', padding: '10px', opacity: 0.8 }}>
      <Image src="/cross.svg" alt="Close" width={20} height={20} onClick={() => setIsOpen(false)} />
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Me</Link></li>
        <li><Link href="/contact">ContactMe</Link></li>
        <li><Link href="/questions">Questions?</Link></li>
      </ul>
    </div>
  );
};

export default RightSubMenu;
