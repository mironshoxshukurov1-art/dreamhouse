import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Navbar from "../Navbar";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { FiMapPin, FiClock, FiMail, FiPhone } from "react-icons/fi";

export default function Screen61({ onMenuClick }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: "url('/house2.jpg')" }}
      ></div>

      <div className="absolute inset-0 backdrop-blur-xl bg-/90"></div>

      <Navbar onMenuClick={onMenuClick} />

      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col ">
        <h1 className="[writing-mode:vertical-rl] rotate-180 text-white/60 ml-16 mb-10 font-['Open_Sans']  uppercase text-[20px] leading-[100%] text-center">
          apartment renovation
        </h1>

        <div className="w-[1px] h-[100px] bg-white/40 ml-16 mb-10"></div>

        <div className="flex flex-col gap-8 text-white/50 text-xl ml-12">
          <FaFacebookF className="hover:text-white transition cursor-pointer" />
          <FaInstagram className="hover:text-white transition cursor-pointer" />
          <FaTelegramPlane className="hover:text-white transition cursor-pointer" />
          <FaYoutube className="hover:text-white transition cursor-pointer" />
        </div>
      </div>

      <main className="relative   flex items-center justify-center min-h-screen">
        <div className="grid grid-cols-9 items-center mt-[-100px]">
          <div className="col-span-1 h-[220px] flex items-center justify-center text-center ">
            <p className="text-white font-['Open_Sans'] font-light uppercase text-[20px] tracking-[2px] leading-[140%]">
              STYLES OF <br /> RENOVATION
            </p>
          </div>

          <div className="col-span-1 flex justify-center">
            <div className="w-[2px] h-[200px] bg-gradient-to-b from-transparent via-white/80 to-transparent"></div>
          </div>

          <div className="col-span-1 h-[220px] flex items-center justify-center text-center ">
            <p className="text-white font-['Open_Sans'] font-light uppercase text-[20px] tracking-[2px]">
              COSTS
            </p>
          </div>

          <div className="col-span-1 flex justify-center">
            <div className="w-[2px] h-[260px] bg-gradient-to-b from-transparent via-white/80 to-transparent"></div>
          </div>

          <div className="col-span-1 h-[220px] flex items-center justify-center text-center ">
            <p className="text-white font-['Open_Sans'] font-light uppercase text-[20px] tracking-[2px] leading-[140%]">
              5 STEPS <br /> TO DREAM <br /> HOUSE
            </p>
          </div>

          <div className="col-span-1 flex justify-center">
            <div className="w-[2px] h-[260px] bg-gradient-to-b from-transparent via-white/80 to-transparent"></div>
          </div>

          <div className="col-span-1 h-[220px] flex items-center justify-center text-center ">
            <p className="text-white font-['Open_Sans'] font-light uppercase text-[20px] tracking-[2px] leading-[140%]">
              ADDITIONAL <br /> SERVICES
            </p>
          </div>

          <div className="col-span-1 flex justify-center">
            <div className="w-[2px] h-[200px] bg-gradient-to-b from-transparent via-white/80 to-transparent"></div>
          </div>

          <div className="col-span-1 h-[220px] flex items-center justify-center text-center ">
            <p className="text-white font-['Open_Sans'] font-light uppercase text-[20px] tracking-[2px]">
              BLOG
            </p>
          </div>
        </div>

      <div className="absolute bottom-0 h-[280px] bg-white w-[calc(100%-200px)] px-12">

  <div className="flex items-center justify-between pt-8">
    
    <h4 className="flex items-center gap-5 font-light text-black text-[24px] tracking-[0.5em] uppercase">
      <HiOutlineHomeModern className="text-3xl shrink-0" />
      <span>Turnkey Construction of Houses</span>
    </h4>

    <span>
      <svg
        width="150"
        height="20"
        viewBox="0 0 150 20"
        fill="none"
      >
        <line
          x1="0"
          y1="10"
          x2="130"
          y2="10"
          stroke="#F97316"
          strokeWidth="2"
        />
        <polyline
          points="130,4 145,10 130,16"
          fill="none"
          stroke="#F97316"
          strokeWidth="2"
        />
      </svg>
    </span>

  </div>

  <div className="w-full h-px bg-gray-200 my-8"></div>

  <div className="flex flex-wrap justify-between items-center text-sm text-gray-700">
    
    <div className="flex items-center gap-2">
      <FiMapPin className="text-orange-400 text-lg" />
      <span>Kiev, st. Knyazhiy Zaton 2/30</span>
    </div>

    <div className="flex items-center gap-2">
      <FiClock className="text-orange-400 text-lg" />
      <span>Mon-Fri: 9:00 - 19:00, Sat: 10:00 - 17:00</span>
    </div>

    <div className="flex items-center gap-2">
      <FiMail className="text-orange-400 text-lg" />
      <span>info@intol.net</span>
    </div>

    <div className="flex items-center gap-2">
      <FiPhone className="text-orange-400 text-lg" />
      <span>+38 (044) 337 14 00</span>
    </div>

  </div>

</div>


      </main>
    </div>
  );
}
