import { useAppDispatch } from "@/redux/app/store";
import { changeTheme } from "@/redux/feature/theme/themeSlice";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

type Props = {};

const Navbar = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleTheme = () => {
    dispatch(changeTheme());
  };
  return (
    <nav className=" from-lightmode-primary/60 to-lightmode-primary/50 fixed left-0 right-0 top-0 flex h-14 items-center justify-between bg-gradient-to-b p-4 dark:from-primary/5 dark:to-transparent ">
      <h1 className="text-lightmode-primary text-2xl  font-semibold tracking-widest dark:text-primary">
        Learn<span className="text-lightmode-text dark:text-text">Hub</span>
      </h1>
      <ul className="text-lightmode-text mr-8 flex items-center gap-3 text-base dark:text-text ">
        <li className=" hover:text-lightmode-primary transition-all duration-200 ease-in-out hover:-translate-y-1 dark:hover:text-primary">
          <Link href={"#"}>About</Link>
        </li>
        <li className="hover:text-lightmode-primary transition-all duration-200 ease-in-out hover:-translate-y-1 dark:hover:text-primary">
          <Link href={"#"}>Contact Us</Link>
        </li>
        <li className="hover:text-lightmode-primary transition-all duration-200 ease-in-out  hover:-translate-y-1 dark:hover:text-primary ">
          <Link href={"#"}>Login</Link>
        </li>
        <li className="hover:text-lightmode-primary transition-all duration-200 ease-in-out hover:-translate-y-1 dark:hover:text-primary ">
          <Link href={"#"}>SignUp</Link>
        </li>
        <li
          onClick={() => dispatch(changeTheme())}
          className="cursor-pointer text-xl"
        >
          <FontAwesomeIcon icon={faCircleHalfStroke} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
