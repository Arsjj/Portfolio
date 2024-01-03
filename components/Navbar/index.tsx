import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function Navigation() {
  return (
    <Navbar
      shouldHideOnScroll
      className="h-14 bg-background/0 backdrop-blur-none data-[menu-open=true]:backdrop-blur-none backdrop-saturate-150 "
    >
      <NavbarContent className="hidden sm:flex mx-auto gap-6" justify="center">
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
