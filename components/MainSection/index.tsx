import React from "react";
import photo from "./a7.jpg";
import Image from "next/image";

export default function MainSection() {
  return (
    <div
      id="home"
      className="relative flex flex-col justify-center items-center bg-no-repeat bg-top max-md:bg-left bg-[url('https://preview.redd.it/eow74ye8vn351.png?auto=webp&s=1ec49989297febc5b8a06a70e8a3c1bedb436a31')] h-[1000px] max-lg:h-fit"
    > 
    <div className="absolute w-full h-full bg-black/50"></div>
      <div className="relative pt-10 flex  flex-col-reverse max-md:items-center gap-10 max-lg:gap-10 max-w-[1000px] p-10 pb-0 max-md:px-0">
        <div className="relative p-5 max-lg:px-10 md:rounded-2xl text-lg max-md:text-center">
          <div className="relative z-0 text-white italic">
            <p className="text-xl mb-5">Hi, my name is Arsen &#41;</p>
            <p className="text-orange pb-5 border-b-1 border-white/50">
              Welcome to my page!
            </p>
            <div className="pt-2">
              <p className="w-fit pb-2">
                I fell in &#34;love&#34; with web programming and I have at least learnt
                something, I think… 🤷‍♂️
              </p>
              <p>
                Whenever possible, I apply my passion for developing products
                with modern JS libraries and frameworks like React.js and
                Next.js, experiment with Css technologies, explore new features
                and so on...
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-0 px-4">
          <Image
            src={photo}
            alt="Arsen"
            width={200}
            className="rounded-full max-md:w-64 md:min-w-56"
          />
        </div>
      </div>
      <div className="relative anim z-1 hr max-md:hidden"></div>
      <div className="relative anim z-1 hr1 max-md:hidden"></div>
    </div>
  );
}
