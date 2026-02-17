import React from "react";
import {
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import Navbar from "../Navbar";

export default function Page4hover({onMenuClick}) {
  return (
    <>
      <div className="relative   min-h-screen w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage : "url('/house2.jpg')" }} >
        <Navbar onMenuClick={onMenuClick}  />

       <div className="absolute left-0 top-1/2 pt-[95px] ml-[65px] -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-12">
                 
                   {/* Vertical Text */}
                   <h1 className="[writing-mode:vertical-rl] rotate-180 text-white/50 font-light text-sm uppercase tracking-[4px]">
                     ремонт квартир под ключ
                   </h1>
                 
                   {/* Divider */}
                   <div className="w-px h-24 bg-white/30"></div>
                 
                   {/* Social Icons */}
                   <div className="flex flex-col gap-6 text-white/40 text-lg">
                     <FaFacebookF className="hover:text-white transition-colors duration-300 cursor-pointer" />
                     <FaInstagram className="hover:text-white transition-colors duration-300 cursor-pointer" />
                     <FaTelegramPlane className="hover:text-white transition-colors duration-300 cursor-pointer" />
                     <FaYoutube className="hover:text-white transition-colors duration-300 cursor-pointer" />
                   </div>
                 
                 </div>
        <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-16">
       <img src="/Group 4.png" alt="" className="pt-[90px]" />
        </main>

       
    <div className="relative lg:absolute lg:bottom-0 lg:right-0 z-30 w-full max-w-[440px] bg-white px-6 sm:px-10 py-8 shadow-2xl mx-auto lg:mx-0 mb-8 lg:mb-0">
  <h4 className="uppercase text-center text-[#333333] text-lg font-semibold">
    Обсудить проект
  </h4>

  {/* Chiziqni span o'rniga border bilan qilish (matn tushib ketmasligi uchun) */}
  <div className="w-full border-t border-[#00000026] mt-6 mb-6"></div>

  <p className="font-['Open_Sans']  text-[16px]   text-[#000000]">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Donec quam felis, ultricies nec, pellentesque eu.
  </p>
</div>
      </div>

  
      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 14px;
        }
      `}</style>
    </>
  );
}
