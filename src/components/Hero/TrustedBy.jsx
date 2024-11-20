import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const logos = [
  '/images/564654645.png',
  '/images/132r.webp',
  '/images/eqeqe.webp',
  '/images/132tr.webp',
  '/images/Copy-of-Sales-Pitch-Deck-5-1024x546.png',
  '/images/42432.png',
  '/images/23412.png',
  '/images/microsoft.webp'
];

export default function TrustedBy() {
  return (
    <div>
      <h3 className="text-xl text-[#474747] mb-4">
        Trusted by companies big and small
      </h3>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        speed={5000}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="trusted-by-slider"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img
              src={logo}
              alt="Client logo"
              className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}