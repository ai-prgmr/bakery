"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer>
      {/* Full-Width Pink CTA */}
      <div className="bg-pink-600 py-16 text-center text-white">
        <h2 className="text-4xl font-serif mb-4 font-bold">
          Ready for Your Sweetest Moment?
        </h2>
        <p className="text-xl mb-8">
          Contact us today to place an order or schedule a consultation.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          href="/contactus"
          className="inline-block bg-white text-pink-600 px-10 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Way Them With Us!
        </motion.a>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" aria-label="Facebook" className="hover:text-pink-200">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-200">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-pink-200">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand/About */}
          <div>
            <Link href="/">
              <span className="text-2xl font-serif text-pink-600 font-extrabold tracking-wider cursor-pointer">
                Sweet Delights
              </span>
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              Handcrafted sweet treats made with love and the freshest
              ingredients since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-500">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products"
                  className="hover:text-pink-300 transition duration-200"
                >
                  Menu & Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus?intent=custom"
                  className="hover:text-pink-300 transition duration-200"
                >
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-pink-300 transition duration-200"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-pink-300 transition duration-200"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-500">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-pink-600" /> Khatiwala
                Tank, Indore, Madhya Pradesh
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-pink-600" />{" "}
                getBaked@faridasbakery.com
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-pink-600" /> (0731) 123-4567
              </li>
            </ul>
          </div>

          {/* Newsletter (Wireframe Element) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-500">
              Newsletter
            </h4>
            <p className="text-sm text-gray-400 mb-3">
              Get exclusive offers and new menu updates.
            </p>
            <form>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded-lg text-gray-800 mb-2"
              />
              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg text-sm transition duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="container mx-auto px-4 mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Farida&apos;s Bakery. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
