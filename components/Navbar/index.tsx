"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import User from "@/icons/User/Index";

import { motion } from "framer-motion";
import { navLinks } from "../../constants";
import { menu, close } from "../../assets";
import { styles } from "../../utils/styles";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } duration-1000 w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          href="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <Image src={logo} alt='logo' className='w-9 h-9 object-contain' /> */}
          <div className="text-[#D4AF37] text-lg relative -top-[1px]">
            <User />
          </div>
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Portfolio
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'
        >
          <Image
            src={toggle ? close : menu}
            alt='menu'
            className='animate-opacity duration-250 w-[28px] h-[28px] object-contain relative z-20 cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${!toggle ? "translate-x-[100%]" : "flex"
              } duration-500 p-6 black-gradient absolute -top-2 right-0 my-2 min-w-[140px] w-full z-10 rounded-b-xl`}
          >
            <ul className='list-none flex justify-end items-center flex-1 flex-col gap-4 py-10'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
