import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import Navbar from "../Navbar";

// ── Orbital Circle with step number ─────────────────────────────────────────
function OrbitalCircle({ step = 3, total = 6 }) {
  const cx = 140, cy = 140, r = 110;
  const circumference = 2 * Math.PI * r;
  const progress = step / total;
  const dashOffset = circumference * (1 - progress);

  // Thumb position
  const angle = 2 * Math.PI * progress - Math.PI / 2;
  const thumbX = cx + r * Math.cos(angle);
  const thumbY = cy + r * Math.sin(angle);

  // Small dot at top (start)
  const startX = cx;
  const startY = cy - r;

  return (
    <div className="relative w-[280px] h-[280px] mx-auto">
      <svg viewBox="0 0 280 280" className="w-full h-full -rotate-90">
        {/* Outer glow ring */}
        <circle
          cx={cx} cy={cy} r={r + 12}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="20"
        />
        {/* Background track */}
        <circle
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        {/* Progress arc */}
        <circle
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke="#FFAC30"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
        {/* Start dot (top, white) */}
        <circle cx={startX} cy={startY} r="4" fill="white" opacity="0.6" />
        {/* Thumb outer */}
        <circle cx={thumbX} cy={thumbY} r="9" fill="rgba(255,172,48,0.25)" />
        {/* Thumb inner */}
        <circle cx={thumbX} cy={thumbY} r="5" fill="#FFAC30" />
        <circle cx={thumbX} cy={thumbY} r="2.5" fill="white" />
      </svg>

      {/* Step number */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Inner rectangle accent (like in the design) */}
        <div
          className="relative flex items-center justify-center"
          style={{ width: 90, height: 110 }}
        >
          {/* Rectangle border */}
          <div
            className="absolute inset-0 border border-white/20"
            style={{ borderRadius: "2px" }}
          />
          <span
            className="text-white font-light leading-none select-none"
            style={{
              fontSize: "72px",
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "-3px",
              lineHeight: 1,
            }}
          >
            {step}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── File / Document Icon (SVG, orange) ───────────────────────────────────────
function DocIcon() {
  return (
    <svg width="52" height="58" viewBox="0 0 52 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Back page */}
      <rect x="10" y="4" width="34" height="42" rx="2" stroke="#FFAC30" strokeWidth="1.5" fill="none" opacity="0.5"/>
      {/* Front page */}
      <rect x="6" y="10" width="34" height="44" rx="2" stroke="#FFAC30" strokeWidth="1.5" fill="rgba(0,0,0,0.3)"/>
      {/* Lines */}
      <line x1="14" y1="24" x2="32" y2="24" stroke="#FFAC30" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="14" y1="31" x2="32" y2="31" stroke="#FFAC30" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="14" y1="38" x2="24" y2="38" stroke="#FFAC30" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────
export default function Mobile4({ onMenuClick }) {
  const [name, setName]   = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      {/* ── Hero ── */}
      <div
        className="relative w-full overflow-hidden flex flex-col"
        style={{
          backgroundImage: "url('/house2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100svh",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        <Navbar onMenuClick={onMenuClick} />

        {/* Desktop sidebar */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-12">
          <h1 className="[writing-mode:vertical-rl] rotate-180 text-white/50 font-light text-[10px] uppercase tracking-[4px] whitespace-nowrap">
            APARTMENT RENOVATION
          </h1>
          <div className="w-px h-24 bg-white/30" />
          <div className="flex flex-col gap-6 text-white/40 text-lg">
            <FaFacebookF  className="hover:text-white transition-all cursor-pointer" />
            <FaInstagram  className="hover:text-white transition-all cursor-pointer" />
            <FaTelegramPlane className="hover:text-white transition-all cursor-pointer" />
            <FaYoutube    className="hover:text-white transition-all cursor-pointer" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 py-12 text-center">
          {/* Label */}
          <p
            className="text-white/80 uppercase mb-8"
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              fontFamily: "sans-serif",
              fontWeight: 400,
              lineHeight: "1.6",
            }}
          >
            6 ШАГОВ К ВАШЕМУ<br />DREAM HOUSE:
          </p>

          {/* Orbital circle image */}
          <div className="w-[260px] h-[260px] mx-auto">
            <img
              src="/Group 4 (3).png"
              alt="step 3"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Doc icon */}
          <div className="mt-6 mb-6 flex items-center justify-center">
            <DocIcon />
          </div>

          {/* Title */}
          <h2
            className="text-white font-bold uppercase mb-4"
            style={{
              fontSize: "clamp(20px, 6vw, 28px)",
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "2px",
              lineHeight: 1.2,
            }}
          >
            СОСТАВЛЕНИЕ СМЕТЫ
          </h2>

          {/* Description */}
          <p
            className="text-white/75 uppercase max-w-[280px] leading-relaxed"
            style={{
              fontSize: "11px",
              letterSpacing: "1.5px",
              fontFamily: "sans-serif",
              fontWeight: 400,
              lineHeight: "1.8",
            }}
          >
            РАЗРАБОТКА ТЕХНИЧЕСКОГО<br />
            ЗАДАНИЯ, 3D ВИЗУАЛИЗАЦИЯ И<br />
            РАСЧЁТ СМЕТЫ
          </p>
        </div>
      </div>

      {/* ── Contact Form ── */}
      <div className="w-full bg-white px-6 sm:px-10 py-10 shadow-2xl">
        <form className="max-w-[440px] mx-auto space-y-6">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-[#FFAC30] outline-none text-gray-800 placeholder-gray-400 text-sm transition-colors duration-200"
            />
          </div>
          <div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ваш телефон"
              className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-[#FFAC30] outline-none text-gray-800 placeholder-gray-400 text-sm transition-colors duration-200"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-5 group mt-6"
          >
            <span className="text-[#FFAC30] uppercase tracking-[3px] text-[11px] font-semibold">
              Обсудить проект
            </span>
            <span className="relative flex items-center">
              <span className="block w-12 h-[1px] bg-[#FFAC30] group-hover:w-16 transition-all duration-300" />
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" className="ml-1">
                <path d="M1 1l6 5-6 5" stroke="#FFAC30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </form>
      </div>
    </>
  );
}