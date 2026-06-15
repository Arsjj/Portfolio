"use client";

import { useState } from "react";

const navItems = [
  { title: "Home", id: "home" },
  { title: "About", id: "about" },
  { title: "Works", id: "works" },
  { title: "Contact", id: "contact" },
];

export default function MobileDock() {
  const [active, setActive] = useState("home");

  const handleClick = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-5 left-1/2 z-[999] flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#00aaff]/30 bg-[#050816]/70 px-3 py-2 shadow-[0_0_35px_rgba(0,170,255,0.25)] backdrop-blur-xl sm:hidden">
      {navItems.map((item) => {
        const isActive = active === item.id;

        return (
          <button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
              isActive
                ? "bg-[#00aaff]/20 text-white shadow-[0_0_18px_rgba(0,170,255,0.6)]"
                : "text-secondary hover:text-white"
            }`}
          >
            {item.title}
          </button>
        );
      })}
    </nav>
  );
}