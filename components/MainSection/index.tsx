import React from "react";
import photo from "./photo/a7.jpg";
import Image from "next/image";

export default function MainSection() {
  return (
    <div
      id="home"
      className="relative flex flex-col items-center bg-no-repeat bg-top bg-image h-[1000px] max-md:h-fit"
    >
      <div className="absolute w-full h-full bg-black/40"></div>
      <div className="relative pt-56 px-10 mb-16 flex flex-col gap-10 max-w-[1200px] max-md:items-center">
        <div className="relative z-0">
          <Image
            src={photo}
            alt="Arsen"
            width={200}
            className="rounded-full max-md:w-64 md:min-w-56"
          />
        </div>
        <div className="relative my-5 text-lg md:rounded-2xl max-md:text-center">
          <div className="relative z-0 text-white italic">
            <p className="text-2xl mb-5">Hi, my name is Arsen &#41;</p>
            <p className="text-orange text-xl pb-7 border-b-1 border-white/50">
              Welcome to my page!
            </p>
            <div className="mt-7 text-lg">
              <p className="w-fit mb-2">
                I fell in &#34;love&#34; with web programming and I have at
                least learnt something, I think… 🤷‍♂️
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
      </div>
      <div className="relative w-[90%] w-max-[1300px] border-b-8 border-orange rounded-[35%] z-1 animate-opacity max-md:hidden"></div>
      <div className="relative w-[70%] w-max-[820px] border-[#27a7d9] border-b-8 rounded-[45%] z-1 animate-opacity max-md:hidden"></div>
    </div>
  );
}
