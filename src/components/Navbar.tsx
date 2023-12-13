import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="border-pri/70 flex h-14 items-center justify-between  bg-gradient-to-b  from-primary/40 to-transparent p-4 ">
      <h1 className="text-2xl font-semibold  text-primary">E-Learning</h1>
      <ul className="mr-8 flex gap-3">
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
