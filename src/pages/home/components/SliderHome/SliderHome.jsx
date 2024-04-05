import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './SliderHome.css';
import Baloncesto from '../../../../assets/sports.jpeg';
import KmilaHombre from '../../../../assets/kamilaMen.jpg';
import KmilaMujer from '../../../../assets/mujer.jpg';
import Uniforme from '../../../../assets/Uniformes.png';

function SliderHome() {

  function f(){
    return 3;
  }

  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      slidesPerView={f()}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, EffectCoverflow, Pagination]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      <SwiperSlide className="swiper-slide swiper-slide1">
        <img className="jjj" src={KmilaHombre} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide swiper-slide2">
        <img src={KmilaMujer} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide swiper-slide3">
        <img src={Baloncesto} alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide swiper-slide4">
        <img src={Uniforme} alt="Slide 4" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SliderHome;
