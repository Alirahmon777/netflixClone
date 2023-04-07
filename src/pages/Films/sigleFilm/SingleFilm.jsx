import { useEffect, useState } from "react";
import { API_KEY, api } from "../../../utils/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { detail, playWhite, star } from "../../../assets/svg";
import { SwiperCartoon, SwiperPopular } from "../../../components";

const SingleFilm = () => {
  const [single, setSingle] = useState({});
  const { id } = useParams("id");
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const {
    vote_average,
    backdrop_path,
    release_date,
    genres,
    original_title,
    overview,
  } = single;

  useEffect(() => {
    api()
      .get(`movie/${id}?api_key=${API_KEY}`)
      .then(({ data }) => setSingle(data));
  }, [id]);

  return (
    <>
      <section
        className="w-full h-full bg-cover"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
        }}
      >
        <div className="w-full h-full bg-[rgba(0,0,0,0.3)] pb-5 shadow-inner">
          <div className="container">
            <div className="text-white flex flex-col gap-[15px] w-[638px] pt-[100px]">
              <div className="">
                <button
                  onClick={goBack}
                  className="px-5 mt-10 cursor-pointer py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-red-600 active:bg-orange-400 hover:bg-orange-500"
                >
                  Go Back
                </button>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-4 uppercase">
                  {genres?.map((genre) => (
                    <p>| {genre.name} | </p>
                  ))}
                </div>
                <h1 className="text-[64px] font-['Bold'] inline relative">
                  {original_title}
                </h1>
                <div className="flex">
                  <p className="py-1 px-3 font-['Bold'] border rounded-full">
                    16+
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center mt-4">
                <div className="flex items-center gap-2">
                  <img
                    src={star}
                    className="w-[30px] h-[30px] align-middle pb-1"
                    alt="star"
                  />
                  <p className="text-white text-xl">
                    {Math.round(vote_average)}
                  </p>
                </div>
                <p className="text-xl">{release_date}</p>
              </div>
              <p className="z-10 text-lg">{overview}</p>
              <div className="flex gap-4">
                <Link
                  to={"trailer"}
                  className="py-[15px] px-[30px] bg-[#E50914] items-center text-[22px] font-['Bold'] gap-5 rounded-[4px] flex text-white"
                >
                  <img src={playWhite} className="w-[20px]" alt="play icon" />{" "}
                  Watch
                </Link>
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

export default SingleFilm;
