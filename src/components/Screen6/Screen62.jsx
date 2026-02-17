import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

export default function Screen62({ onMenuClick, setModal }) {
  return (
    <div className="absolute  left-0 top-0 min-h-screen w-full overflow-hidden z-[1000]">

      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
        style={{ backgroundImage: "url('/house2.jpg')" }}
      />

      <div className="absolute inset-0 bg-black/50" />
      
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-12 ml-[65px]">
        <h1 className="[writing-mode:vertical-rl] rotate-180 text-white/50 font-light text-sm uppercase tracking-[4px]">
          ремонт квартир под ключ
        </h1>
        <div className="w-px h-24 bg-white/30" />
        <div className="flex flex-col gap-6 text-white/40 text-lg">
          <FaFacebookF className="hover:text-white transition-colors duration-300 cursor-pointer" />
          <FaInstagram className="hover:text-white transition-colors duration-300 cursor-pointer" />
          <FaTelegramPlane className="hover:text-white transition-colors duration-300 cursor-pointer" />
          <FaYoutube className="hover:text-white transition-colors duration-300 cursor-pointer" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center gap-8 px-6">

        <h1
          className="text-white font-bold text-[28px] md:text-[34px] uppercase tracking-widest"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          СКИДКА 50%
        </h1>
        <button className="" onClick={() => setModal(false)}><IoIosCloseCircle className="size-15" /></button>
        <p
          className="text-white/70 text-[13px] md:text-[14px] leading-relaxed"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          На время карантина мы предоставляем скидку<br />
          50% на ВСЕ ПАКЕТЫ услуг!<br />
          Гарантия качества - до 5 лет!
        </p>

        <div className="flex items-center gap-4 mt-2 cursor-pointer group">
          <span
            className="text-[#FFAC30] uppercase tracking-[4px] text-[12px] font-semibold group-hover:opacity-80 transition"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            ЗАКАЗАТЬ ЗВОНОК
          </span>
          <div className="flex items-center gap-1">
            <div className="w-16 h-px bg-[#FFAC30]" />
            <span className="text-[#FFAC30] text-lg">→</span>
          </div>
        </div>

        <div className="w-full max-w-sm h-px bg-white/10" />

        <div
          className="flex items-center gap-4 cursor-pointer group"
          onClick={onMenuClick}
        >
          <span
            className="text-white/50 uppercase tracking-[4px] text-[12px] font-light group-hover:text-white/80 transition"
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            ВЕРНУТЬСЯ НА ГЛАВНУЮ
          </span>
          <div className="flex items-center gap-1">
            <div className="w-16 h-px bg-white/40" />
            <span className="text-white/40 text-lg group-hover:text-white/70 transition">→</span>
          </div>
        </div>

      </div>
    </div>
  );
}