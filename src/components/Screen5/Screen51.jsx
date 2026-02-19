import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import Navbar from "../Navbar";

export default function Screen51({ onMenuClick }) {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/house2.jpg')" }}>
      {/* Overlay: Rasmni bir oz qorong'ulashtirish uchun (tekstlar yaxshi o'qilishi uchun) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar & Left Sidebar */}
      <Navbar onMenuClick={onMenuClick} />
      
      <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-12">
        <h1 className="[writing-mode:vertical-rl] rotate-180 text-white/50 font-light text-[10px] uppercase tracking-[4px] whitespace-nowrap">
          APARTMENT RENOVATION
        </h1>
        <div className="w-px h-24 bg-white/30"></div>
        <div className="flex flex-col gap-6 text-white/40 text-lg">
          <FaFacebookF className="hover:text-white transition-all cursor-pointer" />
          <FaInstagram className="hover:text-white transition-all cursor-pointer" />
          <FaTelegramPlane className="hover:text-white transition-all cursor-pointer" />
          <FaYoutube className="hover:text-white transition-all cursor-pointer" />
        </div>
      </div>

      <main className="relative z-10 h-full  flex flex-col pt-25 items-center px-6 lg:px-24">
        <div className="w-full max-w-6xl">
          <h4 className="text-white text-sm lg:text-base font-medium tracking-[3px] text-center mb-16">
            6 STEPS TO YOUR <span className="text-white/70">DREAM HOUSE:</span>
          </h4>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
            <div className="relative flex items-center justify-center">
              <img src="/doira.png" alt="" className="w-32 h-32 lg:w-40 lg:h-40 object-contain" />
              <span className="absolute text-white text-5xl font-light">3</span>
            </div>

            <div className="flex items-center gap-6">
              <img src="/icon.svg" alt="" className="w-10 h-10 lg:w-14 lg:h-14" />
              <h2 className="text-white text-2xl lg:text-4xl font-bold leading-tight uppercase tracking-wider">
                DRAFTING AN <br /> ESTIMATE
              </h2>
            </div>

            <div className="hidden lg:block text-white/50 text-4xl font-thin">
              &gt;
            </div>

            <p className="text-white/80 text-sm lg:text-[16px] leading-[30px] font-['Open_Sans'] max-w-[320px] text-center lg:text-left">
              Development of terms of reference, 3D visualization and calculation of the estimate
            </p>
          </div>
        </div>
      </main>

     <div className="relative lg:absolute lg:bottom-0 lg:right-0 z-30 w-full max-w-[440px] bg-white px-6 sm:px-10 py-8 shadow-2xl mx-auto lg:mx-0 mb-8 lg:mb-0">
          <form className="space-y-6">
            <div>
              <input type="text" placeholder="Ваше имя" className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-[#FFAC30] outline-none text-gray-800 placeholder-gray-500"
              />
            </div>
            <div>
              <input type="tel" placeholder="Ваш телефон" className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-[#FFAC30] outline-none text-gray-800 placeholder-gray-500"
              />
            </div>
            <button className="flex items-center gap-6 group mt-8">
              <span className="text-[#FFAC30] uppercase tracking-widest text-[12px] font-semibold">
                ОБСУДИТЬ ПРОЕКТ
              </span>
              <div className="flex items-center justify-center">
                <img src="/Group 26.svg" alt="" />
              </div>
            </button>
          </form>
        </div>
    </div>
  );
}