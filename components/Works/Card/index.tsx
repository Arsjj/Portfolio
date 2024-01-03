import {
  Card,
  CardHeader,
  CardFooter,
  Button,
  CardBody,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import mk from "../Data/images/2023-01-28 (40).png";

import React from "react";

type Props = {
  name: string;
  description: string;
  src: any;
  technologies: string;
  link: string;
};

export default function CardItem({
  name,
  description,
  src,
  technologies,
  link,
}: Props) {
  return (
    <div className="w-80 cursor-pointer hover:scale-[1.07] duration-250">
      <div
        // isFooterBlurred
        className="relative w-full grid rounded-2xl overflow-hidden"
      >
        <div className="absolute z-10 top-1 flex-col items-start">
          {/* <p className="text-tiny text-white/60 uppercase font-bold">
            Your day your way
          </p> */}
          <h4 className="text-white/90 p-2 font-medium text-xl">{name}</h4>
        </div>
        <div className="relative w-full h-[200px] rounded-lg">
          <Image fill alt={name} className="z-0 object-cover" src={src} />
        </div>
        <div className="relative flex w-full h-14 p-2 bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              {/* <p className="text-tiny text-white/60">Breathing App</p> */}
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
