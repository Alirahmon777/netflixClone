import React, { useContext } from "react";
import { A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { RecomContext } from "../../context/recomContext";
import { Link } from "react-router-dom";

const SwiperRecomendition = () => {
  const { recom } = useContext(RecomContext);

  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={6}
      slidesPerGroup={1}
      speed={1200}
      autoplay={{ delay: 25000, disableOnInteraction: false }}
      navigation
      loop
    >
      {recom.map(({ original_title, title, poster_path, id }, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="relative transition-all films-post cursor-pointer rounded-lg overflow-hidden">
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
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperRecomendition;
