import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import Navbar from "../Navbar";

export default function Screen1({ onMenuClick }) {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/house2.jpg')" }}
    >
      {/* Navbar */}
      <Navbar onMenuClick={onMenuClick} className="relative z-50" />

      {/* Left vertical block */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-12">
        <h1 className="[writing-mode:vertical-rl] rotate-180 text-white/50 font-light text-sm uppercase tracking-[4px]">
          ремонт квартир под ключ
        </h1>

        <div className="w-px h-24 bg-white/30"></div>

        <div className="flex flex-col gap-6 text-white/40 text-lg">
          <FaFacebookF className="hover:text-white transition-colors duration-300 cursor-pointer" />
          <FaInstagram className="hover:text-white transition-colors duration-300 cursor-pointer" />
          <FaTelegramPlane className="hover:text-white transition-colors duration-300 cursor-pointer" />
          <FaYoutube className="hover:text-white transition-colors duration-300 cursor-pointer" />
        </div>
      </div>

      {/* Form */}
      <div className="relative lg:absolute lg:bottom-8 lg:right-8 z-30 w-full max-w-[440px] bg-white px-6 sm:px-10 py-8 shadow-2xl mx-auto lg:mx-0">
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full py-3 bg-transparent border-b border-gray-300 focus:border-[#FFAC30] outline-none text-gray-800 placeholder-gray-500"
          />

          <input
            type="tel"
            placeholder="Ваш телефон"
            className="w-full py-3 bg-transparent border-b border-gray-300 focus:border-[#FFAC30] outline-none text-gray-800 placeholder-gray-500"
          />

          <button type="submit" className="flex items-center gap-6 group mt-8">
            <span className="text-[#FFAC30] uppercase tracking-widest text-[12px] font-semibold">
              ОБСУДИТЬ ПРОЕКТ
            </span>
            <img src="/Group 26.svg" alt="arrow" />
          </button>
        </form>
      </div>
    </div>
  );
}
