import React from "react";
import Navbar from "../Navbar";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

export default function Mobile1({ onMenuClick }) {
  const panels = [
    {
      bg: "/bg1.png",
      overlay: "bg-black/60",
      label: "ELITE",
      labelColor: "text-white",
      active: false,
    },
    {
      bg: "/bg2.png",
      overlay: "bg-black/30",
      label: "VIP",
      labelColor: "text-[#FFAC30]",
      active: true,
      desc: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.",
    },
    {
      bg: "/photo-3.png",
      overlay: "bg-black/50",
      label: "EXTRA",
      labelColor: "text-white",
      active: false,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black flex flex-col">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar onMenuClick={onMenuClick} />
      </div>

      {/* Panels */}
      <div className="flex flex-col w-full flex-1 ">
        {panels.map((panel, i) => (
          <div
            key={i}
            className={`relative w-full overflow-hidden ${
              panel.active ? "flex-[2.2]" : "flex-1"
            }`}
            style={{ minHeight: panel.active ? 220 : 130 }}
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${panel.bg})` }}
            />
            {/* Overlay */}
            <div className={`absolute inset-0 ${panel.overlay}`} />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 py-8">
              <h2
                className={`text-3xl tracking-[0.4em] pt-10  font-light mb-0 ${panel.labelColor}`}
              >
                {panel.label}
              </h2>

              {panel.active && (
                <div className="flex flex-col items-center mt-5 gap-5">
                  <p className="text-white/80 text-[11px] leading-6 tracking-wider text-center max-w-xs">
                    {panel.desc}
                  </p>
                  <div className=" gap-8">
                    <button className="flex items-center gap-2 text-[#FFAC30] text-[11px] tracking-widest">
                      ГАЛЕРЕЯ
                      <img src="/chiziq.svg" alt="" />
                    </button>
          
                    <button className="flex pt- items-center gap-2 text-white/80 text-[11px] tracking-widest">
                      СПИСОК УСЛУГ
                      <img src="/chiziq.svg" alt="" />
                    </button>
         
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

  
    </div>
  );
}