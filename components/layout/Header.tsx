// components/layout/Header.tsx
"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for open/close
import Image from "next/image";
const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Contact Us", href: "/contactus" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the mobile menu dropdown
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      // initial={{ y: -100 }}
      // animate={{ y: 0 }}
      // transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
      initial={{
        maskImage:
          "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
      }}
      animate={{
        maskImage:
          "linear-gradient(to right, rgba(0,0,0,1) 90%, rgba(0,0,0,1) 100%)",
      }}
      className="sticky top-0 z-50 bg-pink-50 backdrop-blur-sm shadow-md"
    >
      <div className="container mx-auto flex items-center justify-between p-4 md:px-8">
        {/* Logo/Brand Name */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/bakery/images/farida-1.jpeg"
            width={50}
            height={50}
            alt="Farida's Bakery Logo"
            className="rounded-full shrink-0"
          />
          <span className="text-2xl font-serif text-pink-600 font-extrabold tracking-wider cursor-pointer">
            Farida&apos;s Bakery
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <span className="text-gray-700 hover:text-pink-600 transition duration-200 text-lg font-medium cursor-pointer">
                {item.name}
              </span>
            </Link>
          ))}

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700 transition duration-300 font-semibold shadow-md"
          >
            Order Now
          </motion.button>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu (Framer Motion Animation) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden border-t border-gray-100"
          >
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    onClick={() => setIsOpen(false)} // Close menu on click
                    className="block w-full text-gray-700 hover:text-pink-600 py-3 px-4 rounded-lg text-lg font-medium transition duration-200 bg-white hover:bg-pink-50 cursor-pointer"
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              {/* Mobile CTA Button */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(false)}
                className="w-full bg-pink-600 text-white px-4 py-3 rounded-full mt-2 font-semibold hover:bg-pink-700 transition duration-300 shadow-md"
              >
                Order Now
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
