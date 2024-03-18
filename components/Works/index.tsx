"use client";

import React from "react";
import { motion } from "framer-motion";
import { data } from "./Data";
import Card from "./Card";

export default function Works() {
  return (
    <div
      id="projects"
      className="relative overflow-hidden grid w-full justify-items-center pb-28"
    >
      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-2xl text-orange text-center font-semibold">
          Projects
        </p>
        <div className="flex flex-wrap pt-10 md:px-10 gap-7 mx-auto justify-center w-full max-w-screen-[1800px]">
          {data.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              description={item.description}
              link={item.link}
              src={item.img}
              technologies={item.technologies}
              tags={item.tags}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
