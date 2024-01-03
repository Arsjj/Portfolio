import React from "react";
import photo from "./a7.jpg";
import Image from "next/image";

export default function MainSection() {
  return (
    <div id="home" className="relative flex flex-col justify-center items-center bg-no-repeat bg-top bg-[url('https://cdna.artstation.com/p/assets/images/images/001/515/406/large/david-levy-slanted-topview-a-03-endoftheline-copy.jpg?1447798561')] h-[600px]">
        <div className="relative flex items-center gap-20 max-w-[1000px] mb-10 p-10 pb-0">
          <div className="relative  text-lg">
          {/* <div className="absolute top-0 left-0 w-full h-full backdrop-blur-xl z-0"></div> */}
          <div className="relative z-0">

            <h2 className="text-2xl mb-2 backdrop-blur-xl w-fit">Hi my name is Arsen</h2>

            <p className="bg-orange/30 backdrop-blur-2xl w-fit">
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
              className="rounded-full"
            />
          </div>
        </div>
        <div className="hr"></div>
        <div className="hr1"></div>
    </div>
  );
}
