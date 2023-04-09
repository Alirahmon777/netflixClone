import React, { useContext } from "react";
import { SeriesContext } from "../../context/SeriesContext";
import { Link } from "react-router-dom";
import { SwiperCartoon, SwiperRecomendition } from "../../components";
import Pagination from "../../utils/Pagination";

const Series = () => {
  const { series, setSeries } = useContext(SeriesContext);
  return (
    <section>
      <div className="container">
        <ul className="flex flex-wrap gap-4 mb-10 justify-center">
          {series?.results?.map(
            ({ poster_path, original_name, name, id }, i) => (
              <li
                className={
                  "relative transition-all films-item cursor-pointer rounded-lg overflow-hidden"
                }
                key={i}
                title={original_name}
              >
                <Link to={`/series/${id}`}>
                  <img
                    className="hover:scale-105 transition-all hover:opacity-30"
                    width={280}
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={name}
                  />
                  <p className="z-10 text-3xl text-white absolute w-full transition-all bottom-0 films-text opacity-0 pointer-events-none text-center">
                    {name}
                  </p>
                </Link>
              </li>
            )
          )}
        </ul>
        <Pagination
          dataType={"discover/tv"}
          dataSetState={setSeries}
          itemsPerPage={series?.total_pages}
        />
        <h2 className="text-[26px] text-[#e5e5e5] font-['Medium']] mb-4">
          Recommendations
        </h2>
        <SwiperRecomendition />

        <h2 className="text-[26px] text-[#e5e5e5] font-['Medium']] mb-4">
          Cartoon
        </h2>
        <SwiperCartoon />
      </div>
    </section>
  );
};

export default Series;
