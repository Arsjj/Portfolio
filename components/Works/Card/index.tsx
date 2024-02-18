import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";

type Props = {
  name: string;
  description: string;
  src: any;
  link: string;
  technologies: string[];
};

export default function Card({
  name,
  description,
  src,
  link,
  technologies,
}: Props) {
  const openTab = (link: string) => {
    window.open(`${link}`, "_blank");
  };

  return (
    <div className="parent rounded-lg" onClick={() => openTab(link)}>
      <div className="relative card rounded-2xl h-full w-[340px] max-lg:w-96 max-sm:w-[21rem] max-xsm:w-full cursor-pointer ">
        <div className="relative flex flex-col h-full content-box rounded-2xl">
          <span className="absolute left-2 top-3 card-title text-white bg-black/50 rounded-r-lg p-2 px-3 font-medium">
            {name}
          </span>
          <div className="relative w-full h-[200px] rounded-lg">
            <Image
              fill
              alt="sd"
              className="z-0 object-cover rounded-t-2xl"
              src={src}
              sizes="(max-width: 640px) 350px, (min-width: 640px) 700px"
            />
          </div>
          <div className="relative flex flex-1 w-full gap-[7px] rounded-b-2xl items-start p-2 bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow h-full gap-2 items-center">
              <div className="flex flex-col justify-between h-full">
                <p className="text-tiny text-white/80">{description}</p>
                <p className="text-tiny mt-2 text-white/80">
                  {technologies.map((item) => (
                    <span key={item} className="mr-[5px]">
                      #{item}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <Link
              target="_blank"
              href={link}
              className="flex items-center h-full"
            >
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
