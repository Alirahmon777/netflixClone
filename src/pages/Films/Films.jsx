import React, { useContext } from "react";
import { PopularContext } from "../../context/popularContext";
import { SwiperCartoon, SwiperRecomendition } from "../../components";
import { Link } from "react-router-dom";

const Films = () => {
  const { popular } = useContext(PopularContext);

  return (
    <section className="text-[#e5e5e5]">
      <div className="container">
        <ul className="flex flex-wrap gap-4 mb-10 justify-center">
          {popular.map(({ poster_path, title, original_title, id }, i) => (
            <li
              className={
                "relative transition-all films-item cursor-pointer rounded-lg overflow-hidden"
              }
              key={i}
              title={original_title}
            >
              <Link to={`/films-cartoons/${id}`}>
                <img
                  className="hover:scale-105 transition-all hover:opacity-30"
                  width={280}
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt={original_title}
                />
                <p className="z-10 text-3xl absolute w-full transition-all bottom-0 films-text opacity-0 pointer-events-none text-center">
                  {title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="text-[26px] font-['Medium']] mb-4">Recommendations</h2>
        <SwiperRecomendition />

        <h2 className="text-[26px] font-['Medium']] mb-4">Cartoon</h2>
        <SwiperCartoon />
      </div>
    </section>
  );
};

export default Films;
