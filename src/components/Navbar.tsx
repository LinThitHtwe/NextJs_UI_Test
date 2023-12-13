import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="fixed left-0 right-0 top-0  flex h-14 items-center justify-between bg-gradient-to-b from-primary/5 to-transparent p-4 ">
      <h1 className="text-2xl font-semibold  tracking-widest text-primary">
        Learn<span className="text-text">Hub</span>
      </h1>
      <ul className="mr-8 flex gap-3 text-base text-text/100">
        <li>
          <Link href={"#"}>Home</Link>
        </li>
        <li>
          <Link href={"#"}>About</Link>
        </li>
        <li>
          <Link href={"#"}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
