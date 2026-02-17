import React, { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import Screen71 from "./Screen7/Screen71";
import Screen62 from "./Screen6/Screen62";

export default function Navbar({ onMenuClick }) {
  const [modal, setModal] = useState(false);
  return (
    <header className="relative pr-[50px] ">
      <div className="ml-[90px] max-w-[1600px]   flex items-centr justify-between py-4 ">
        <div className="flex items-r gap-4 ">
          <img
            src="/logo-5-(1).svg"
            alt="logo"
            className=" h-[57px] pr-[50px] "
          />

          <div className="flex items-center">
            <HiMenuAlt1
              className="text-white text-3xl cursor-pointer hover:text-[#FFAC30] transition ml-[63px]"
              onClick={onMenuClick}
            />

            <a
              href="tel:+380979877888"
              className="hidden lg:block text-white text-lg font-light hover:text-[#FFAC30] transition border-l/20 pl-[127px] text-nowrap"
            >
              +38 (097) 987 78 88
            </a>
          </div>
        </div>

        <div className="ml-auto">
          <button className="hidden lg:flex items-center gap-6 group">
            <span className="text-[#FFAC30] uppercase tracking-widest text-[12px] font-semibold">
              Заказать звонок
            </span>

            <div className="flex items-center cursor-pointer justify-center rounded-full border border-white p-[3px]">
              <div className="flex items-center justify-center rounded-full border border-white p-[3px]">
                <div
                  onClick={()=>setModal(true)}
                  className="flex items-center justify-center rounded-full border border-white w-10 h-10"
                >
                  <FaPhone className="text-white text-xs" />
                </div>
              </div>
            </div>

            {modal && <Screen62 setModal={setModal} />}
          </button>
        </div>
      </div>
      <div className="hidden lg:block max-w-[1320px] ml-[190px] h-[1px] bg-white/10" />
    </header>
  );
}
