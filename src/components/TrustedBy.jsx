import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const logos = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/mimisai-database.firebasestorage.app/o/logo-full-new.png?alt=media&token=5786e1f6-ade6-477e-b0c2-8f1ad89c1dbc",
    alt: "Mimis AI client"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/mimisai-database.firebasestorage.app/o/cropped-cropped-LA-Barbershop-logo-1.webp?alt=media&token=dd8c1071-175e-474e-a995-7311ae035561",
    alt: "LA Barbershop"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/mimisai-database.firebasestorage.app/o/DonAntonio_logo_vert-white.png?alt=media&token=67f51177-7538-4a45-ad6b-f44d2fb34793",
    alt: "Don Antonio"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/mimisai-database.firebasestorage.app/o/logo%20(1).webp?alt=media&token=5d2f0372-e527-4cfe-85f3-3f243cc0b19a",
    alt: "Client Logo"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/mimisai-database.firebasestorage.app/o/betros-plumbing-logo-3.png.webp?alt=media&token=aa154b2d-b1c9-4d73-af9f-687b6ceab512",
    alt: "Betros Plumbing"
  }
];

export default function TrustedBy() {
  return (
    <div className="overflow-hidden">
      <h3 className="text-xl text-[#474747] font-bold mb-8">
        Trusted by companies<br />big and small
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
        <div className="md:col-span-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
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
              1024: { slidesPerView: 4 }
            }}
            className="trusted-by-slider"
          >
            {[...logos, ...logos].map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-16">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 object-contain hover:scale-105 transition-transform duration-300 max-w-[180px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}