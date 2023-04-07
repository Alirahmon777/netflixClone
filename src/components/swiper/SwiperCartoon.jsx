import React, { useContext } from "react";
import { A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CartoonContext } from "../../context/cartoonContext";
import { Link } from "react-router-dom";

const SwiperCartoon = () => {
  const { cartoon } = useContext(CartoonContext);

  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={6}
      speed={1100}
      autoplay={{ delay: 20000, disableOnInteraction: false }}
      navigation
      loop
    >
      {cartoon.map(({ original_title, title, poster_path, id }, i) => {
        return (
          <SwiperSlide key={i}>
            <Link to={`/films-cartoons/${id}`}>
              <img
                className="rounded-lg transition-all hover:opacity-30"
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt={original_title}
              />
              <p className="z-10 text-3xl absolute w-full transition-all bottom-0 films-text opacity-0 pointer-events-none text-center">
                {title}
              </p>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperCartoon;
