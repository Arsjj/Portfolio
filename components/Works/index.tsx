import React from "react";
import CardItem from "./Card";
import { data } from "./Data";

export default function Works() {
  return (
    <div id="projects" className="grid w-full justify-items-center py-10">
        <p className="text-2xl text-orange font-semibold">Projects</p>
      <div className="flex flex-wrap pt-10  gap-5 mx-auto justify-center w-full max-w-screen-[1800px]">
        {data.map((item) => (
          <CardItem
            key={item.id}
            name={item.name}
            description={item.description}
            link={item.link}
            src={item.img}
            technologies={item.technologies}
          />
        ))}
      </div>
    </div>
  );
}
