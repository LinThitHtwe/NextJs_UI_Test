import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" h-auto border-t border-primary border-opacity-10 bg-primary/5 text-text">
      <div className="grid h-64 grid-cols-3 gap-4 p-4">
        <div className=" flex flex-col gap-3 p-3">
          <h2 className="mb-4 text-xl">Contact Us:</h2>
          <p className="p-2">Email : linthit2745@gmail.com</p>
          <p className="p-2">Phone : +959672634632</p>
          <p className="p-2"> Address : blah blah address</p>
        </div>
        <div className=" flex flex-col gap-3 p-3">
          <h2 className="mb-4 text-xl">Our Socials:</h2>
          <p className="p-2">Email : linthit2745@gmail.com</p>
          <p className="p-2">Phone : +959672634632</p>
          <p className="p-2"> Address : blah blah address</p>
        </div>
        <div className="border">1</div>
      </div>

      <h1 className="p-3 text-center text-3xl font-semibold tracking-widest text-primary ">
        Learn<span className=" text-text">Hub</span>
      </h1>
      <p className="p-3 text-center text-xs">
        &copy; 2023 Your E-Learning Platform
      </p>
    </div>
  );
};

export default Footer;
