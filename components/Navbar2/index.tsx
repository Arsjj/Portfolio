import React, { useEffect, useState } from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function Navigation() {
  const [scrollY, setScrollY] = useState(0);

  let width = false;
  if (typeof document !== "undefined") {
    width = document.documentElement.clientWidth > 640 ? true : false;
  }


  useEffect(() => {
    if (width) {
      if (typeof window !== "undefined") {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }
  }, [width, scrollY]);

  return (
    <Navbar
      shouldHideOnScroll
      className={`h-14 ${
        scrollY > 950 ? "bg-[#1B1B1D] " : "bg-background/0"
      } max-md:bg-[#1B1B1D] backdrop-blur-none data-[menu-open=true]:backdrop-blur-none backdrop-saturate-150`}
    >
      <NavbarContent className="flex mx-auto gap-6 PX-0" justify="center">
        <NavbarItem>
          <Link href="#home" className="text-orange text-lg">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#about" className="text-orange text-lg">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#projects" className="text-orange text-lg">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
