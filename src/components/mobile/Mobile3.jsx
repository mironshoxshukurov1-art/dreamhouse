import React, { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import Navbar from "../Navbar";

// ─── Circular Slider ────────────────────────────────────────────────────────
function CircularSlider({ value, onChange, min = 20, max = 300 }) {
  const svgRef = useRef(null);
  const dragging = useRef(false);
  const cx = 130, cy = 130, r = 100;

  const normalizedAngle = ((value - min) / (max - min)) * 300 - 150;
  const rad = (a) => (a * Math.PI) / 180;
  const thumbX = cx + r * Math.cos(rad(normalizedAngle - 90));
  const thumbY = cy + r * Math.sin(rad(normalizedAngle - 90));

  const describeArc = (startDeg, endDeg) => {
    const s = rad(startDeg - 90), e = rad(endDeg - 90);
    const x1 = cx + r * Math.cos(s), y1 = cy + r * Math.sin(s);
    const x2 = cx + r * Math.cos(e), y2 = cy + r * Math.sin(e);
    const large = endDeg - startDeg > 180 ? 1 : 0;
    return `M${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2}`;
  };

  const getAngleFromEvent = (e) => {
    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const scaleX = 260 / rect.width;
    const scaleY = 260 / rect.height;
    const x = (clientX - rect.left) * scaleX - cx;
    const y = (clientY - rect.top) * scaleY - cy;
    let angle = (Math.atan2(y, x) * 180) / Math.PI + 90;
    if (angle < 0) angle += 360;
    if (angle > 180) angle -= 360;
    const clamped = Math.max(-150, Math.min(150, angle));
    const newVal = Math.round(((clamped + 150) / 300) * (max - min) + min);
    onChange(newVal);
  };

  const filledEnd = -150 + ((value - min) / (max - min)) * 300;

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 260 260"
      className="w-full max-w-[260px] mx-auto touch-none select-none"
      onMouseDown={(e) => { dragging.current = true; getAngleFromEvent(e); }}
      onMouseMove={(e) => dragging.current && getAngleFromEvent(e)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => { dragging.current = true; getAngleFromEvent(e); }}
      onTouchMove={(e) => { dragging.current && getAngleFromEvent(e); }}
      onTouchEnd={() => (dragging.current = false)}
    >
      {/* Track background */}
      <path
        d={describeArc(-150, 150)}
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Filled track */}
      {value > min && (
        <path
          d={describeArc(-150, filledEnd)}
          fill="none"
          stroke="#FFAC30"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      )}
      {/* Center value */}
      <text
        x={cx}
        y={cy - 4}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="52"
        fontWeight="300"
        fontFamily="'Playfair Display', serif"
        letterSpacing="-1"
      >
        {value}
      </text>
      {/* m² label */}
      <text
        x={cx}
        y={cy - 58}
        textAnchor="middle"
        fill="rgba(255,255,255,0.7)"
        fontSize="13"
        fontFamily="sans-serif"
      >
        м²
      </text>
      {/* Thumb */}
      <circle cx={thumbX} cy={thumbY} r="8" fill="#FFAC30" />
      <circle cx={thumbX} cy={thumbY} r="4" fill="white" />
    </svg>
  );
}

// ─── Package Selector ───────────────────────────────────────────────────────
const PACKAGES = [
  { id: "ELITE", label: "ELITE" },
  { id: "VIP",   label: "VIP"   },
  { id: "EXTRA", label: "EXTRA" },
];

const PRICES = {
  ELITE: { base: 3641, label: "Elite" },
  VIP:   { base: 4250, label: "VIP"   },
  EXTRA: { base: 5100, label: "Extra" },
};

// ─── Main Component ─────────────────────────────────────────────────────────
export default function Mobile4({ onMenuClick }) {
  const [sqm, setSqm]         = useState(64);
  const [pkg, setPkg]         = useState("ELITE");
  const [name, setName]       = useState("");
  const [phone, setPhone]     = useState("");

  const price = Math.round(PRICES[pkg].base * sqm);
  const formattedPrice = price.toLocaleString("ru-RU").replace(/,/g, " ");

  return (
    <>
      {/* ── Hero Section ── */}
      <div
        className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/house2.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55 z-0" />

        <Navbar onMenuClick={onMenuClick} />

        {/* Desktop sidebar */}
        <div className="absolute left-0 top-1/2 pt-[95px] ml-[65px] -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-12">
          <h1 className="[writing-mode:vertical-rl] rotate-180 text-white/50 font-light text-sm uppercase tracking-[4px]">
            ремонт квартир под ключ
          </h1>
          <div className="w-px h-24 bg-white/30" />
          <div className="flex flex-col gap-6 text-white/40 text-lg">
            <FaFacebookF  className="hover:text-white transition-colors duration-300 cursor-pointer" />
            <FaInstagram  className="hover:text-white transition-colors duration-300 cursor-pointer" />
            <FaTelegramPlane className="hover:text-white transition-colors duration-300 cursor-pointer" />
            <FaYoutube    className="hover:text-white transition-colors duration-300 cursor-pointer" />
          </div>
        </div>

        {/* ── Calculator Card (overlaid on hero) ── */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-24">
          {/* Title */}
          <p className="text-white/90 text-center uppercase tracking-[3px] text-[16px] font-light mb-20 leading-relaxed">
            Выберите площадь и один из<br />пакетов услуг:
          </p>

          {/* Circular slider */}
          <div className="w-full max-w-[260px]">
            <CircularSlider value={sqm} onChange={setSqm} min={20} max={300} />
          </div>

          {/* Package tabs */}
          <div className="flex items-center gap-0 mt-6 w-full max-w-[320px]">
            {PACKAGES.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setPkg(p.id)}
                className="flex-1 relative flex flex-col items-center pb-3 group"
              >
                {/* Info icon */}
                <span className="w-5 h-5 rounded-full border border-white/30 text-white/40 text-[10px] flex items-center justify-center mb-2 group-hover:border-[#FFAC30] group-hover:text-[#FFAC30] transition-colors duration-200">
                  i
                </span>
                <span
                  className={`uppercase tracking-[2px] text-[11px] font-semibold transition-colors duration-200 ${
                    pkg === p.id ? "text-[#FFAC30]" : "text-white/50 group-hover:text-white/80"
                  }`}
                >
                  {p.label}
                </span>
                {/* Indicator dot */}
                <span
                  className={`mt-3 w-2 h-2 rounded-full transition-all duration-300 ${
                    pkg === p.id ? "bg-[#FFAC30] scale-100" : "bg-white/20 scale-75"
                  }`}
                />
                {/* Active underline */}
                {pkg === p.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#FFAC30]" />
                )}
              </button>
            ))}
          </div>

          {/* Price */}
          <div className="mt-8 text-center">
            <span className="text-white font-light tracking-widest"
              style={{ fontSize: "clamp(28px, 8vw, 52px)", fontFamily: "'Playfair Display', serif" }}>
              {formattedPrice}
            </span>
            <span className="text-white/60 text-sm ml-3 uppercase tracking-widest">грн</span>
          </div>
        </div>
      </div>

      {/* ── Contact Form Section ── */}
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
              <svg
                className="ml-1 text-[#FFAC30]"
                width="8" height="12" viewBox="0 0 8 12"
                fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1l6 5-6 5" stroke="#FFAC30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </form>
      </div>
    </>
  );
}