import React, { useState } from "react";
import Navbar from "../Navbar";

const SERVICES = [
  {
    id: 1,
    title: "ВИДЕО\nНАБЛЮДЕНИЕ",
    bg: "/Group 17 (1).png",
  },
  {
    id: 2,
    title: "LOREM IPSUM\nDOLOR",
    bg: "/Group 16.png",
  },
];

export default function Mobile6({ onMenuClick }) {
  const [expanded, setExpanded] = useState(false);
  const [name, setName]         = useState("");
  const [phone, setPhone]       = useState("");

  return (
    <>
      {/* ── Tiles ── */}
      <div className="w-full flex flex-col">
        {SERVICES.map((s) => (
          <div
            key={s.id}
            className="relative w-full overflow-hidden"
            style={{ height: "42vmax", minHeight: "220px", maxHeight: "340px" }}
          >
            {/* BG image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${s.bg}')` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
            {/* Title bottom-left */}
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <h2
                className="text-white font-bold uppercase leading-tight whitespace-pre-line"
                style={{
                  fontSize: "clamp(16px, 5vw, 22px)",
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "1.5px",
                  lineHeight: 1.25,
                }}
              >
                {s.title}
              </h2>
            </div>
          </div>
        ))}

        {/* ── "БОЛЬШЕ УСЛУГ" section ── */}
        <div
          className="relative w-full overflow-hidden flex flex-col items-center justify-center py-8 cursor-pointer group"
          style={{
            backgroundImage: "url('/services.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "120px",
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col items-center gap-3">
            <span
              className="text-[#FFAC30] uppercase tracking-[4px] font-medium"
              style={{ fontSize: "11px", letterSpacing: "4px" }}
            >
              Больше услуг
            </span>
            <svg
              width="20" height="12" viewBox="0 0 20 12" fill="none"
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            >
              <path
                d="M1 1l9 9 9-9"
                stroke="#FFAC30"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Extra services (expandable) */}
        {expanded && (
          <div className="w-full flex flex-col">
            {[
              { title: "LOREM IPSUM\nDOLOR", bg: "/house6.jpg" },
              { title: "LOREM IPSUM\nDOLOR", bg: "/house1.jpg" },
            ].map((s, i) => (
              <div
                key={i}
                className="relative w-full overflow-hidden"
                style={{ height: "42vmax", minHeight: "220px", maxHeight: "340px" }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${s.bg}')` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h2
                    className="text-white font-bold uppercase leading-tight whitespace-pre-line"
                    style={{
                      fontSize: "clamp(16px, 5vw, 22px)",
                      fontFamily: "'Playfair Display', serif",
                      letterSpacing: "1.5px",
                      lineHeight: 1.25,
                    }}
                  >
                    {s.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Contact Form ── */}
      <div className="w-full bg-white px-6 sm:px-10 py-10">
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
            className="flex items-center gap-4 group mt-6"
          >
            <span
              className="text-[#FFAC30] uppercase font-semibold leading-tight"
              style={{ fontSize: "11px", letterSpacing: "3px" }}
            >
              Обсудить<br />проект
            </span>
            <span className="relative flex items-center ml-2">
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