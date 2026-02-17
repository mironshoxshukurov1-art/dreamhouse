import React from "react";

const steps = [
  {
    icon: "/icon 1.svg",
    title: "LEAVE AN\nAPPLICATION",
    desc: "LEAVE AN APPLICATION BY PHONE\nOR ON OUR WEBSITE",
  },
  {
    icon: "/icon 3.svg",
    title: "CHECK OUT OF\nTHE MEASURER",
    desc: "OUR SPECIALIST COMES TO YOU AT THE OBJECT\nFOR MEASURING AND PHOTO FIXING",
  },
  {
    icon: "/icon 5.svg",
    title: "DRAFTING\nAN ESTIMATE",
    desc: "DEVELOPMENT OF TERMS OF REFERENCE, 3D\nVISUALIZATION AND CALCULATION OF THE ESTIMATE",
  },
  {
    icon: "/icon 2.svg",
    title: "SIGNING\nTHE CONTRACT",
    desc: "AGREEMENT OF THE COST AND DATE OF COMPLETION\nOF WORKS, SIGNING OF THE CONTRACT",
  },
  {
    icon: "/icon 4.svg",
    title: "BEGINNING\nOF WORK",
    desc: "START OF REPAIR WORKS UNDER THE\nSUPERVISION OF A PERSONAL SUPERVISOR",
  },
  {
    icon: "/icon 6.svg",
    title: "COMPLETION",
    desc: "COMPLETION OF REPAIRS, REMOVAL\nOF CONSTRUCTION RUBBISH",
  },
];

export default function Screen52({ onMenuClick }) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[url('/bg5.png')] bg-cover bg-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content container — markazda */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 lg:px-24 text-center">
        {/* Header */}
        <h4 className="text-white font-bold text-[15px] uppercase tracking-widest mb-12 text-left self-start">
          STEPS & ICONS
        </h4>

        {/* Steps */}
        <div className="flex flex-col ml-50 gap-10 w-full max-w-[900px]">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
              {/* Icon + Title */}
              <div className="flex items-center gap-4 lg:gap-6 w-full lg:w-[400px]">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={step.icon}
                    alt=""
                    className="w-full h-full object-contain"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(68%) sepia(78%) saturate(450%) hue-rotate(358deg) brightness(103%)",
                    }}
                  />
                </div>
                <span className="text-white font-bold text-[20px] uppercase leading-tight text-left">
                  {step.title.split("\n").map((line, j) => (
                    <span key={j} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </div>

              {/* Divider dot */}
              <div className="w-2 h-2 rounded-full bg-[#FFAC30] my-2 lg:my-0 flex-shrink-0" />

              {/* Description */}
              <span className="text-white/60 text-[12px] uppercase leading-relaxed tracking-wider text-left lg:flex-1">
                {step.desc.split("\n").map((line, j) => (
                  <span key={j} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}
