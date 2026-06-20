"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel({ images }) {
  console.log(images)
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={2}
      observer={true}
      observeParents={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      style={{ width: "100%" }}
      onSlideChange={() => console. log('slide change')} 
      onSwiper={ (swiper) => console.log (swiper)}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "500px",
            }}
          >
            <Image
              src={img}
              alt={`slide ${i}`}
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

