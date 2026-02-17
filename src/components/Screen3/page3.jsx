import React from "react";
import Navbar from "../Navbar";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

export default function Page3({onMenuClick}) {
  return (
    <div className="w-full h-screen overflow-hidden  bg-black">
      <section className="relative w-full h-screen">

        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar  onMenuClick={onMenuClick} />
        </div>

        <div className="flex w-full h-full">

          <div className="relative flex-[1] overflow-hidden">

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/bg1.png)" }}
            />
            <div className="absolute inset-0 bg-black/60" />
 <div className="absolute left-0 top-1/2 pt-[95px] ml-[25px] -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-12">
     
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

            <div className="relative z-10 h-full flex items-center justify-center">
              <h2 className="text-white text-4xl tracking-[0.4em]">
                ELITE
              </h2>
            </div>
          </div>

          <div className="relative flex-[2.2] overflow-hidden">

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/bg2.png)" }}
            />
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 h-full flex flex-col justify-center px-24 text-white">
              <h3 className="text-[#FFAC30] text-3xl tracking-[0.4em] mb-6">
                VIP
              </h3>

              <p className="max-w-xl text-sm leading-6 text-white/80 mb-10">
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT,
                SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE
                MAGNA ALIQUA.
              </p>

              <div className=" gap-10 text-sm tracking-widest">
                <button className="text-[#FFAC30] flex items-center gap-3 group">
                  ГАЛЕРЕЯ
               <img src="/chiziq.svg" alt="" className="" />
                </button>

                <button className="text-white/80 pr-5 pt-[69px] flex  gap-1  group">
                  СПИСОК УСЛУГ
               <img src="/chiziq.svg" alt="" className="" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative flex-[1] overflow-hidden">

            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(/photo-3.png)" }}
            />
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 h-full flex items-center justify-center">
              <h2 className="text-white text-4xl tracking-[0.4em]">
                EXTRA
              </h2>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
