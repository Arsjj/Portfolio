import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";

type Props = {
  name: string;
  description: string;
  src: any;
  link: string;
};

export default function CardItem({ name, description, src, link }: Props) {
  const ref = useRef()
  const openTab = (link: string) => {
    window.open(`${link}`, "_blank");
  };

  const container = document.querySelector(".container"),
    card = document.querySelector(".card"),
    title = document.querySelector(".title"),
    santa = document.querySelector(".santa"),
    tree = document.querySelector(".tree");

  // Card Rotate On Mouse Move
  function mouseMove(rotate) {
    let x = (innerWidth / 2 - rotate.pageX) / 15,
      y = (innerHeight / 2 - rotate.pageY) / 15;
    // ref.current.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
  };

  // Card effect on Mouse Over the card
  // container.addEventListener("mouseover", () => {
  //   title.style.transform = "translate3d(0, 0, 160px)";
  //   santa.style.transform = "translate3d(0, 0, 220px)";
  //   tree.style.transform = "translate3d(0, 0, 120px)";
  //   card.style.transition = "all 0.1s ease";
  // });

  // // Card back to Normal when Mouse Out
  // container.addEventListener("mouseout", () => {
  //   card.style.transform = "rotateY(0deg) rotateX(0deg)";
  //   card.style.transition = "all 0.5s ease";
  //   title.style.transform = "translate3d(0, 0, 0)";
  //   santa.style.transform = "translate3d(0, 0, 0)";
  //   tree.style.transform = "translate3d(0, 0, 0)";
  // });

  return (
    <div
      className="w-80 max-md:w-96 max-sm:w-[21rem] max-xsm:w-[90%] cursor-pointer hover:scale-[1.07] duration-250"
      onClick={() => openTab(link)}
      onMouseMove={mouseMove}
    >
      <div className="relative w-full grid rounded-2xl overflow-hidden">
        <div className="absolute z-10 top-1 flex-col items-start">
          <p className="text-white bg-black/50 rounded-r-lg p-2 px-3 font-medium">
            {name}
          </p>
        </div>
        <div className="relative w-full h-[200px] rounded-lg">
          <Image
            fill
            alt={name}
            className="z-0 object-cover"
            src={src}
            // priority
            sizes="(max-width: 768px) 250px, (min-width: 768px) 300px"
          />
        </div>
        <div className="relative flex w-full items-center h-14 p-2 bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/80">{description}</p>
            </div>
          </div>
          <Link target="_blank" href={link}>
            <Button radius="full" size="sm">
              Open
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
