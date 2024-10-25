"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

// Navbar component
export default function Navbar() {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar container */}
      <nav className="font-serif text-white p-4 fixed top-0 w-full bg-black bg-opacity-50 flex flex-col sm:flex-row z-10">
        
        {/* Main container for Navbar content */}
        <div className="flex justify-between items-center container mx-auto">
          
          {/* Brand name with a link */}
          <div className="text-2xl font-bold text-orange-500 hover:text-white">
            <Link href="#about">GrillUp!</Link>
          </div>
          
          {/* Hamburger icon for toggling mobile menu */}
          <FaBars
            onClick={toggleMenu}
            className="md:hidden text-orange-500 text-3xl hover:text-white"
          />
          
          {/* Desktop navigation links */}
          <div className="hidden md:flex space-x-14">
            <Link href="#Screen" className="text-orange-500 hover:text-white" aria-label="Home">
              Home
            </Link>
            <Link href="#about" className="text-orange-500 hover:text-white" aria-label="About">
              About
            </Link>
            <Link href="#Menu" className="text-orange-500 hover:text-white" aria-label="Menu">
              Menu
            </Link>
            <Link href="#Offer" className="text-orange-500 hover:text-white" aria-label="Offers">
              Offers
            </Link>
            <Link href="#Contact" className="text-orange-500 hover:text-white" aria-label="Contact">
              Contact
            </Link>
          </div>

          {/* "Get Started" button visible on desktop only */}
          <div className="hidden md:block">
            <Button>
              <Link href="#Offer" className="text-orange-500 hover:text-white" aria-label="Get Started">
                Get Started
              </Link>

            </Button>
          </div>
        </div>
        {/* Mobile menu that toggles with the hamburger icon */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4`}>
          <div className="flex gap-4 mt-5 justify-center">
            <Link href="#Screen" className="text-white hover:text-orange-500">
              Home
            </Link>
            <Link href="#about" className="text-white hover:text-orange-500">
              About
            </Link>
            <Link href="#Menu" className="text-white hover:text-orange-500">
              Menu
            </Link>
            <Link href="#Offer" className="text-white hover:text-orange-500">
              Offers
            </Link>
            <Link href="#Contact" className="text-white hover:text-orange-500">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
