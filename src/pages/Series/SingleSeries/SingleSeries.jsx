import { useEffect, useState } from "react";
import { api } from "../../../utils/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { playWhite, star, world } from "../../../assets/svg";
import { SwiperCartoon, SwiperPopular } from "../../../components";

const SingleSeries = () => {
  const [singleSeries, SetSingleSeries] = useState({});
  const { id } = useParams("id");
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const {
    vote_average,
    backdrop_path,
    first_air_date,
    name,
    homepage,
    overview,
    genres,
    original_name,
    original_language,
  } = singleSeries;

  useEffect(() => {
    api()
      .get(`tv/${id}?api_key=05078d9c9a7971d554f489377ba90d87`)
      .then(({ data }) => SetSingleSeries(data));
  }, [id]);

  return (
    <>
      <section
        className="w-full h-[1000px] bg-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
        }}
      >
        <div className="w-full h-full bg-[rgba(0,0,0,0.3)] pb-5 shadow-[0_35px_60px_-15px_rgba(0,0,0)]">
          <div className="container">
            <div className="text-white flex flex-col gap-[15px] w-[638px] pt-[120px]">
              <div className="">
                <button
                  onClick={goBack}
                  className="px-5 mt-10 cursor-pointer py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-red-600 active:bg-orange-400 hover:bg-orange-500"
                >
                  Go Back
                </button>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-4 uppercase my-4">
                  {genres == null
                    ? null
                    : genres?.map((genre, i) => (
                        <p key={i} className="border-x-2 px-2">
                          {genre.name}
                        </p>
                      ))}
                </div>
                <h1 className="text-[64px] font-['Bold'] inline relative leading-[70px] mb-3">
                  {name}
                </h1>
                <h2 className="text-[24px] mb-3">
                  Original Title - {original_name}
                </h2>
                <div className="flex">
                  <p className="py-1 px-3 font-['Bold'] border rounded-full">
                    16+
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center mt-4">
                {vote_average ? (
                  <div className="flex items-center gap-2 border-r-2 pr-2">
                    <img
                      src={star}
                      className="w-[30px] h-[30px] align-middle pb-1"
                      alt="star"
                    />
                    <p className="text-white text-xl">
                      {Math.round(vote_average)}
                    </p>
                  </div>
                ) : null}
                <p className="text-xl border-r-2 pr-2">{first_air_date}</p>
                <p className="text-xl">
                  Language:
                  <span className="uppercase pl-3">{original_language}</span>
                </p>
              </div>
              <p className="z-10 text-lg">{overview}</p>
              <div className="flex gap-4">
                <Link
                  to={"trailer"}
                  className="py-[15px] px-[30px] bg-[#E50914] items-center text-[22px] font-['Bold'] gap-5 rounded-[4px] flex text-white"
                >
                  <img src={playWhite} className="w-[20px]" alt="play icon" />
                  Watch
                </Link>
                {homepage ? (
                  <a
                    href={homepage}
                    target="_blank"
                    className="py-[15px] px-[30px] bg-[rgba(250,250,250,0.4)] items-center text-[22px] font-['Bold'] gap-5 rounded-[4px] flex text-white"
                  >
                    <img
                      src={world}
                      className="w-[30px]"
                      alt="world url icon"
                    />
                    Web Site
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="z-10 text-white mt-4 pl-4">
          <h2 className="text-[26px] text-[#e5e5e5] font-['Medium']] mb-4">
            Cartoon on Netflix
          </h2>
          <SwiperCartoon />
        </div>
        <div className="z-10 text-white mt-4 pl-4">
          <h2 className="text-[26px] text-[#e5e5e5] font-['Medium']] mb-4">
            Cartoon on Netflix
          </h2>
          <SwiperPopular />
        </div>
      </div>
    </>
  );
};

export default SingleSeries;
