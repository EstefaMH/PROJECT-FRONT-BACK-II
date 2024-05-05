import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Uniforme from '../../../../assets/futbol.jpg';
import Gym from '../../../../assets/gym.jpg';
import KmilaHombre from '../../../../assets/kamilaMen.jpg';
import KmilaMujer from '../../../../assets/mujer.jpg';
import Baloncesto from '../../../../assets/sports.jpeg';
import './SliderHome.css';

function SliderHome() {

  function perView(){
    return 3;
  }

  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      slidesPerView={perView()}
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
      <SwiperSlide className="swiper-slide swiper-slide5">
        <img src={Gym} alt="Slide 5" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SliderHome;
