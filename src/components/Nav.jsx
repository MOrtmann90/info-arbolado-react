import tandilWhite from "/src/assets/logo-tandil-white.png";
import fchLogo from "/src/assets/fch-logo.png";
import { RiTreeFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useState } from "react";
import "./nav.css";

const Nav = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavDropOpen, setIsNavDropOpen] = useState(false);

  const onResize = () => {
    if (window.innerWidth > 768) {
      setIsNavOpen(false);
    }
  };

  const navOnScroll = () => {
    if (window.scrollY >= 100) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  // --------------------------------------------

  const closeMobileMenu = () => {
    setIsNavOpen(false);
    isNavDropOpen && setIsNavDropOpen(!isNavDropOpen);
  };

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const onInfo = () => {
    setIsNavDropOpen(!isNavDropOpen);
  };

  // --------------------------------------------

  window.addEventListener("scroll", navOnScroll);
  window.addEventListener("resize", onResize);

  return (
    <header className={navBackground ? "header active-nav" : "header"}>
      <nav className="navbar">
        <div className="flex items-center md:hidden">
          <RiTreeFill className="size-8 text-main2" />
          <h3 className="text-xl font-normal text-white">Arbolado urbano</h3>
        </div>

        <div className="hidden md:flex">
          <Link
            to="https://tandil.gov.ar/"
            target="_blank"
            className="self-center cursor-pointer"
          >
            <img className="logo" src={tandilWhite} alt="logo-municipio" />
          </Link>
          <Link to="https://www.fch.unicen.edu.ar/" target="_blank">
            <img className="cursor-pointer w-36" src={fchLogo} alt="logo-fch" />
          </Link>
        </div>

        <ul className={isNavOpen ? "nav-menu-resp" : "nav-menu"}>
          <li>
            <ScrollLink
              className="nav-link-btn"
              to="home"
              spy={true}
              offset={0}
              duration={0}
              onClick={closeMobileMenu}
            >
              Inicio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="nav-link-btn"
              to="acerca"
              spy={true}
              hashSpy={true}
              offset={0}
              duration={0}
              onClick={closeMobileMenu}
            >
              El proyecto
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="nav-link-btn"
              to="resumen"
              spy={true}
              hashSpy={true}
              offset={0}
              duration={0}
              onClick={closeMobileMenu}
            >
              Resumen
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="nav-link-btn"
              to="mapas"
              spy={true}
              hashSpy={true}
              offset={0}
              duration={0}
              onClick={closeMobileMenu}
            >
              Mapas
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className="nav-link-btn"
              to="relevamiento"
              spy={true}
              hashSpy={true}
              offset={0}
              duration={0}
              onClick={closeMobileMenu}
            >
              Relevamiento
            </ScrollLink>
          </li>
          <li
            className="relative flex group hover:border-b-[3px] cursor-pointer transition-all duration-100 ease-linear mx-auto"
            onClick={onInfo}
          >
            Info <FaAngleDown className="self-center" />
            {isNavDropOpen && (
              <ul className="absolute p-2 space-y-6 text-center transform -translate-x-1/2 rounded-md left-1/2 top-10 md:space-y-2 md:bg-main-500/70">
                <li>
                  <ScrollLink
                    className="relative nav-link-btn"
                    to="info1"
                    spy={true}
                    hashSpy={true}
                    offset={-120}
                    duration={0}
                    onClick={closeMobileMenu}
                  >
                    Especies
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    className="relative nav-link-btn"
                    to="info2"
                    spy={true}
                    hashSpy={true}
                    offset={-120}
                    duration={0}
                    onClick={closeMobileMenu}
                  >
                    Altura
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    className="relative nav-link-btn"
                    to="info3"
                    spy={true}
                    hashSpy={true}
                    offset={-120}
                    duration={0}
                    onClick={closeMobileMenu}
                  >
                    Interferencias
                  </ScrollLink>
                </li>
              </ul>
            )}
          </li>
        </ul>

        <div onClick={handleClick} className="menu-icon">
          {isNavOpen ? (
            <FaXmark className="size-6" />
          ) : (
            <FaBars className="size-6" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
