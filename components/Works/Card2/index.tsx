import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  description: string;
  src: any;
  link: string;
};

export default function Card({ name, description, src, link }: Props) {
  const openTab = (link: string) => {
    window.open(`${link}`, "_blank");
  };

  return (
    <div className="parent rounded-lg" onClick={() => openTab(link)}>
      <div className="card rounded-2xl w-80 max-md:w-96 max-sm:w-[21rem] max-xsm:w-[90%] cursor-pointer ">
        <div className="relative content-box rounded-2xl">
          <span className="absolute left-2 top-3 card-title text-white bg-black/50 rounded-r-lg p-2 px-3 font-medium">
            {name}
          </span>
          <div className="relative w-full h-[200px] rounded-lg">
            <Image
              fill
              alt="sd"
              className="z-0 object-cover rounded-t-2xl"
              src={src}
              sizes="(max-width: 768px) 250px, (min-width: 768px) 300px"
            />
          </div>
          <div className="relative flex w-full rounded-b-2xl items-center h-14 p-2 bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
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
    </div>
  );
}
