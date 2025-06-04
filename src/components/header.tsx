"use client";
import { useState } from "react";
import Hamburger from "./hamburger";
import ToggleMenu from "./toggle-menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="relative p-3 lg:p-4">
      <nav className="hidden md:block justify-items-center md:mr-5">
        <ul className="flex gap-12 font-mono">
          <li>
            <a href="#home" className="hover:text-[color:var(--secondary)]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[color:var(--secondary)]">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[color:var(--secondary)]">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:[color:var(--secondary)]">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <ToggleMenu /> : <Hamburger />}
      </button>
      {isOpen && (
        <>
          <nav className="absolute top-full left-0 w-full md:hidden items-center">
            <ul className="flex flex-col gap-5 p-5 text-xl font-semibold items-center bg-white dark:bg-neutral-800">
              <li>
                <a
                  href="#home"
                  className="hover:[color:var(--secondary)]"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:[color:var(--secondary)]"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:[color:var(--secondary)]"
                  onClick={toggleMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:[color:var(--secondary)]"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
