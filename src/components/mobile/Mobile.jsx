import { useState } from "react";
import {
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";

const ArrowRight = () => (
  <svg width="80" height="12" viewBox="0 0 80 12" fill="none">
    <line x1="0" y1="6" x2="70" y2="6" stroke="#FFAC30" strokeWidth="1" />
    <polyline points="65,1 72,6 65,11" stroke="#FFAC30" strokeWidth="1.5" fill="none" />
  </svg>
);

export default function DreamHouseMobile({ onMenuClick }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="max-w-[440px] mx-auto bg-white min-h-screen">

      {/* ───── MENU OVERLAY ───── */}
      <div
        className={`fixed inset-0 bg-black/95 z-50 flex flex-col px-8 py-7 transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="self-end text-[#FFAC30] text-2xl bg-transparent border-none cursor-pointer mb-9"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        <ul className="list-none p-0 m-0">
          {["Услуги", "Портфолио", "О нас", "Материалы", "Контакты"].map((item) => (
            <li
              key={item}
              onClick={() => setMenuOpen(false)}
              className="text-white text-xl font-semibold uppercase tracking-widest border-b border-white/10 py-[18px] cursor-pointer hover:text-[#FFAC30] transition-colors duration-200"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-5 text-white/30 text-base">
          <FaFacebookF className="cursor-pointer hover:text-[#FFAC30] transition-colors" />
          <FaInstagram className="cursor-pointer hover:text-[#FFAC30] transition-colors" />
          <FaTelegramPlane className="cursor-pointer hover:text-[#FFAC30] transition-colors" />
          <FaYoutube className="cursor-pointer hover:text-[#FFAC30] transition-colors" />
        </div>
      </div>

      {/* ───── HERO ───── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "min(100vw, 520px)", minHeight: 360 }}
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Group-22.png')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/55" />

        {/* Decorative diagonal lines */}
        <div className="absolute inset-0 z-[4] pointer-events-none overflow-hidden">
          <svg width="100%" height="100%" viewBox="0 0 440 520" preserveAspectRatio="none" fill="none">
            <line x1="20" y1="110" x2="200" y2="520" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="360" y1="50" x2="60" y2="520" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </svg>
        </div>

        {/* ── NAVBAR ── */}
<nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-[18px] py-4">
  {/* Left menu */}
  <button
    className="bg-transparent border-none text-white cursor-pointer p-0 flex items-center"
    onClick={() => setMenuOpen(true)}
  >
    <HiMenuAlt1 size={44} />
  </button>

  {/* Right phone */}
  <div className="flex items-center gap-3">
    <button className="bg-transparent border-none text-[#FFAC30] text-[10px] font-semibold tracking-[2px] uppercase cursor-pointer">
      ЗАКАЗАТЬ ЗВОНОК
    </button>
    <div className="w-[34px] h-[34px] rounded-full border border-[#FFAC30]/55 flex items-center justify-center text-[#FFAC30] cursor-pointer hover:bg-[#FFAC30]/10 transition-colors">
      <FaPhone size={13} />
    </div>
  </div>
</nav>



        {/* Tagline */}
        <div className="absolute pt-[110px] mx-2 left-1/2 -translate-x-1/2 z-[5] text-white/50 text-[8px] tracking-[5px] uppercase mx-6 pr-5
 whitespace-nowrap">

<h5 class="font-roboto font-medium pr-4 text-[12px] leading-[100%] tracking-[0.695em] text-center uppercase">
  ремонт квартир под ключ
</h5>
        </div>

        {/* Slogan image */}
        <img
          src="/slogan.svg"
          alt="Dream House"
          className="absolute pt-[150px] ml-7 pr-5"
        />
      </div>

      {/* ───── FORM ───── */}
      <div className="bg-white px-8 pt-9 ">
        {/* Name input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-0 border-b border-gray-200 py-2.5 text-[15px] text-gray-700 bg-transparent outline-none placeholder-gray-400 focus:border-[#FFAC30] transition-colors duration-300"
          />
        </div>

        {/* Phone input */}
        <div className="mb-4">
          <input
            type="tel"
            placeholder="Ваш телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border-0 border-b border-gray-200 py-2.5 text-[15px] text-gray-700 bg-transparent outline-none placeholder-gray-400 focus:border-[#FFAC30] transition-colors duration-300"
          />
        </div>

        {/* Submit */}
        <button className="flex items-center gap-4 bg-transparent border-none cursor-pointer p-0 mt-3">
          <span className="text-[#FFAC30] text-[10px] font-semibold tracking-[3px] uppercase">
            О Б С У Д И Т Ь &nbsp; П Р О Е К Т
          </span>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}