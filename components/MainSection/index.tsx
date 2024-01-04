import React from "react";
import photo from "./a7.jpg";
import Image from "next/image";

export default function MainSection() {
  return (
    <div
      id="home"
      className="relative flex flex-col justify-center items-center bg-no-repeat bg-top bg-[url('https://cdna.artstation.com/p/assets/images/images/001/515/406/large/david-levy-slanted-topview-a-03-endoftheline-copy.jpg?1447798561')] h-[600px]"
    >
      <div className="relative pt-40 flex max-md:flex-col-reverse items-center gap-20 max-lg:gap-10 max-w-[1000px] p-10 pb-0 max-md:px-0">
        <div className="relative p-5 shadow rounded-3xl bg-black/50 text-lg max-sm:text-center">
          <div className="relative z-0">
            <h2 className="text-2xl mb-2">
              Hi my name is Arsen
            </h2>

            <p className="w-fit">
              After some acquaintance with web programming it became more
              interesting for me, and now I want to use my skills in this area.
              I like to create something new and I am open to learning more.
            </p>
          </div>
        </div>
        <div className="relative z-0">
          <Image
            src={photo}
            alt="Arsen"
            width={600}
            className="rounded-full max-md:w-64 md:min-w-56"
          />
        </div>
      </div>
      <div className="anim hr max-md:hidden"></div>
      <div className="anim hr1 max-md:hidden"></div>
    </div>
  );
}
