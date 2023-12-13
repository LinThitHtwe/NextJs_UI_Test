import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-24 flex p-4">
      <div className="relative flex h-[55vh] w-[50%] flex-col items-center justify-center gap-3 text-text">
        <h1 className="text-5xl font-bold tracking-widest text-primary">
          Learn<span className="text-text">Hub</span>
        </h1>
        <p className="text-center text-sm tracking-tighter">
          Your Gateway to Infinite Knowledge
        </p>

        <div className="from-primary-20 to-primary-50 bg-gradient absolute bottom-5 left-10 h-[70%] w-[33%] rounded-full bg-gradient-to-bl from-primary/10 to-primary/20 blur-3xl"></div>
      </div>

      <div className="relative h-[80vh] w-[50%]  px-24 py-2">
        <div className=" h-full overflow-hidden rounded-xl p-4 ">
          <div className="absolute left-0 right-0 h-[60%] rounded-full bg-gradient-to-br from-primary/20 to-primary/50 blur-3xl"></div>

          <Image
            src="/learning.svg"
            alt="Learning Image"
            width={450}
            height={450}
            className="relative z-10"
          />
        </div>
      </div>
    </div>
  );
}
