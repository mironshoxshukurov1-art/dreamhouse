import React from "react";
import Screen1 from "./components/Screen1";
import Page3 from "./components/Screen3/page3";
import Screen2 from "./components/Screen2";
import Pagehover3 from "./components/Screen3/pagehover3";
import Page4 from "./components/screen4/page4";
import Page4hover from "./components/screen4/Page4hover";
import Screen51 from "./components/Screen5/Screen51";
import Screen52 from "./components/Screen5/Screen52";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./index.css";
import "./styles.css";
import "./swiper-custom.css";

import { Pagination } from "swiper/modules";
import Screen61 from "./components/Screen6/Screen61";
import Screen62 from "./components/Screen6/Screen62";
import Screen72 from "./components/Screen7/Screen72";
import Elite1 from "./components/Gallery/Elite1";
import Screen71 from "./components/Screen7/Screen71";
import Mobile from "./components/mobile/Mobile";
import Mobile1 from "./components/mobile/Mobile1";
import Mobile3 from "./components/mobile/Mobile3";
import Mobile4 from "./components/mobile/Mobile3";
import Mobile5 from "./components/mobile/Mobile5";
import Mobile6 from "./components/mobile/Mobile6";

export default function App() {
  const swiperRef = React.useRef(null);

  // Screen61 — index 8 (0 dan boshlab sanaganda)
  const goToScreen61 = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(8);
    }
  };

  return (
    <div>
      <div className="max-md:hidden ">
        <Swiper
          ref={swiperRef}
          direction="vertical"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          onSlideChange={(swiper) => {
            console.log("Slide changed to:", swiper.activeIndex);
          }}
        >
          <SwiperSlide>
            <Screen1 onMenuClick={goToScreen61} />
          </SwiperSlide>

          <SwiperSlide>
            <Screen2 onMenuClick={goToScreen61} />
          </SwiperSlide>

          <SwiperSlide>
            <Page3 onMenuClick={goToScreen61} />
          </SwiperSlide>

          <SwiperSlide>
            <Pagehover3 onMenuClick={goToScreen61} />
          </SwiperSlide>

          <SwiperSlide>
            <Page4 onMenuClick={goToScreen61} />
          </SwiperSlide>

          <SwiperSlide>
            <Page4hover onMenuClick={goToScreen61} />
          </SwiperSlide>

          <SwiperSlide>
            <Screen51 onMenuClick={goToScreen61} />
          </SwiperSlide>

          <SwiperSlide>
            <Screen52 onMenuClick={goToScreen61} />
          </SwiperSlide>

          <SwiperSlide>
            <Screen61 onMenuClick={goToScreen61} />
          </SwiperSlide>

          {/* <SwiperSlide>
        <Screen62 />
      </SwiperSlide> */}

          <SwiperSlide>
            <Screen71 />
          </SwiperSlide>

          <SwiperSlide>
            <Elite1 />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="md:hidden max-md:block ">
        <Mobile />
        <Mobile1 />
        <Mobile3 />
        <Mobile4 />
        <Mobile5 />
        <Mobile6 />
      </div>
    </div>
  );
}
