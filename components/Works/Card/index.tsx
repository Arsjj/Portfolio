import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  description: string;
  src: any;
  link: string;
  technologies: string[];
  tags: any
};

export default function Card({
  name,
  description,
  src,
  link,
  technologies,
  tags
}: Props) {
  const openTab = (link: string) => {
    window.open(`${link}`, "_blank");
  };

  return (
    <div className="parent group max-sm:w-full h-full min-h-[340px] flex justify-center rounded-lg" onClick={() => openTab(link)}>
      <div className="relative p-4 bg-black card rounded-2xl h-full w-[350px] max-sm:w-full max-xl:w-[360px] max-lg:w-80 max-md:w-96 cursor-pointer ">
        <div className="relative flex flex-col h-full content-box rounded-2xl">
          <span className="absolute left-2 top-3 card-title text-white bg-black/50 rounded-r-lg p-2 px-3 font-medium">
            {name}
          </span>
          <div className="relative w-full h-[200px] rounded-md">
            <Image
              fill
              alt="sd"
              className="z-0 object-cover rounded-lg"
              src={src}
              sizes="(max-width: 640px) 350px, (min-width: 640px) 700px"
            />
          </div>
          <div className="relative flex flex-col flex-1 w-full gap-[7px] rounded-b-2xl py-2 bg-black/40 bottom-0 z-10 border-default-600 dark:border-default-100">
            <div className="flex flex-1 flex-grow h-full gap-2 items-center">
              <div className="flex flex-col justify-between h-full">
                <p className="mt-2 text-secondary group-hover:text-white duration-700">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags?.map((tag: any) => (
                    <p
                      key={`${name}-${tag.name}`}
                      className={`text-[14px] ${tag.color}`}
                    >
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <Link
              target="_blank"
              href={link}
              className="flex mt-2 w-full justify-end items-end"
            >
              <button className="p-2 z-0 text-xs rounded-lg relative items-center justify-center box-border bg-transparent text-white border border-transparent border-b-white duration-100 hover:text-white/80">
                Discover more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
