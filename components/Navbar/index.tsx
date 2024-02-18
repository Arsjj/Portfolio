import React from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

export default function Navigation() {
  return (
    <Navbar
      shouldHideOnScroll 
      className="h-14 bg-background/0 max-lg:bg-[#1B1B1D] backdrop-blur-none data-[menu-open=true]:backdrop-blur-none backdrop-saturate-150"
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
