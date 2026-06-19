"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import UserNinja from "@/icons/User/Index";

import { motion } from "framer-motion";
import { navLinks } from "@/constants";
import { menu, close } from "@/assets";
import { styles } from "../../utils/styles";
import {
  User,
  Briefcase,
  Code2,
  Mail,
  Rocket,
  Home
} from "lucide-react";

const items = [
  {
    id: "home",
    label: "Skills",
    icon: Home,
  },
  {
    id: "about",
    label: "About",
    icon: User,
  },
  {
    id: "projects",
    label: "Projects",
    icon: Briefcase,
  },
  {
    id: "contact",
    label: "Contact",
    icon: Rocket,
  },
];


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
        } duration-1000 w-full flex items-center py-5 fixed top-0 z-50 ${scrolled ? "bg-primary" : "bg-transparent"
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
            <UserNinja />
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
                } hover:text-white text-[18px] font-medium`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className='block h-full'>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
          <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;

const MobileNavbar = () => {
  const [active, setActive] = useState("home")

  const handleNavClick = (title: string, id: string) => {
    setActive(title);
  };
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pb-3">
      <div
        className="
      w-full
      grid grid-cols-4
      rounded-2xl
      border border-white/10
      bg-[#08090f]/90
      backdrop-blur-xl
      shadow-[0_-8px_30px_rgba(0,0,0,0.45)]
      overflow-hidden
    "
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <a key={item.id}
              href={`#${item.id}`}
              onClick={() => handleNavClick(item.id, item.id)}
              className={`
            relative flex flex-col items-center justify-center
            h-[58px] gap-1 text-[10px]
            transition-all duration-300
            ${isActive ? "text-[#00AAFF]" : "text-white/55"}
          `}
            >
              {isActive && (
                <span className="absolute top-0 h-[2px] w-8 rounded-full bg-[#00AAFF] shadow-[0_0_10px_#00AAFF]" />
              )}

              <Icon size={18} strokeWidth={1.8} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  )
}