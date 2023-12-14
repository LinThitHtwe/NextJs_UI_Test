"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mt-24 flex p-4">
        <div className="text-lightmode-text relative flex h-[55vh] w-[50%] flex-col items-center justify-center gap-3 dark:text-text">
          <h1 className="text-lightmode-primary text-center text-7xl font-bold tracking-widest dark:text-primary">
            Learn<span className="text-lightmode-text dark:text-text">Hub</span>
          </h1>
          <p className="tracking-normaln text-center text-base">
            Your Gateway to Infinite Knowledge
          </p>

          <Link
            href="#"
            className="bg-lightmode-primary/90 hover:bg-lightmode-primary mt-10 rounded-lg p-3 transition-all duration-300 ease-in-out hover:-translate-y-1 dark:bg-primary/90 dark:hover:bg-primary"
          >
            Get Started
          </Link>

          <div className=" from-primary-20 to-primary-50 bg-gradient custom-pulse absolute bottom-5 left-10 hidden h-[70%] w-[33%] rounded-full bg-gradient-to-bl from-primary/10 to-primary/20 blur-3xl dark:inline-block"></div>
        </div>

        <div className="relative h-[72vh] w-[50%]  px-24 py-2">
          <div className="h-full overflow-hidden rounded-xl p-4 ">
            <div className="custom-pulse absolute left-0 right-0 -z-10 hidden h-[60%] rounded-full bg-gradient-to-br from-primary/20 to-primary/30 blur-3xl dark:inline-block"></div>

            <Image
              src="/learning.svg"
              alt="Learning Image"
              width={450}
              height={450}
              className=" "
            />
          </div>
        </div>
      </div>
      <div className="text-lightmode-text relative mb-10 flex h-60 justify-around px-8 dark:text-text">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            className="border-lightmode-primary/20 hover:bg-lightmode-primary/20 relative z-10 w-[30%] cursor-pointer rounded-xl border p-4 transition-all duration-500 ease-in-out dark:border-primary/20 dark:duration-300 dark:hover:bg-primary/5"
            key={index}
          >
            <div className="relative flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-medium tracking-tighter">
                Our Courses
              </h3>
            </div>
            <p className="px-5 py-3 text-sm">
              Explore a diverse collection tailored for growth, from
              foundational principles to advanced expertise. Chart your
              educational path, unlocking possibilities for personal and
              professional success. Enrich your mind and skills, embracing a
              lifelong pursuit of knowledge with us.
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="absolute bottom-4 right-6 h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        ))}
        <div className="custom-pulse top-15 absolute left-44 hidden h-[60%] w-[30%] rounded-full bg-gradient-to-br from-primary/10 to-primary/20 blur-3xl dark:inline-block"></div>

        <div className="custom-pulse absolute  -right-2 bottom-1 hidden h-[60%] w-[30%] rounded-full bg-gradient-to-br from-primary/10 to-primary/20 blur-3xl dark:inline-block"></div>
      </div>
    </>
  );
}
