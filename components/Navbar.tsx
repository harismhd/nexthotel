import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/calicut1.png"
          width={122}
          height={77}
          alt="Employee List Logo"
        />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/employee">
        <a>Restaurant List</a>
      </Link>
      {/* <Link href="/blog">
        <a>Blog</a>
      </Link> */}
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Navbar;
