import React, { useEffect, useState } from "react";
import {
  DownArrow,
  GiftBox,
  NetflixLogo,
  NotificationBell,
  Search,
  close,
} from "../../assets/svg";
import { NavLink } from "react-router-dom";
import { ProfileImg } from "../../assets/img";

const Header = () => {
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [offset, setOffset] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setOffset(true);
      } else {
        setOffset(false);
      }
    });
  }, []);

  const searchHandler = () => {
    setIsSearch(!isSearch);
  };

  return (
    <header
      className={
        offset
          ? "py-[26px] sticky z-50 top-0 transition-all backdrop-blur-2xl"
          : `py-[26px] bg-[#141414] transition-all`
      }
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-[50px]">
            <img src={NetflixLogo} alt="" />
            <ul className="items-center text-[#E5E5E5] gap-5 text-sm font-['Medium'] hidden md:flex">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-['Bold']"
                      : "opacity-60 hover:opacity-100"
                  }
                  to={"/home"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-['Bold']"
                      : "opacity-60 hover:opacity-100"
                  }
                  to={"/series"}
                >
                  Series & TV shows
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-['Bold']"
                      : "opacity-60 hover:opacity-100"
                  }
                  to={"/films"}
                >
                  Films
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-['Bold']"
                      : "opacity-60 hover:opacity-100"
                  }
                  to={"/cartoon"}
                >
                  Cartoon
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-white font-['Bold']"
                      : "opacity-60 hover:opacity-100"
                  }
                  to={"/my-list"}
                >
                  My List
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex">
            <ul className="flex text-white items-center gap-5">
              <li className="cursor-pointer flex gap-5">
                <form action="">
                  <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={`rounded-xl p-1 text-black pl-2 text-sm outline outline-red-500 transition-all ${
                      isSearch
                        ? "translate-x-0 opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none translate-x-12"
                    }`}
                  />
                </form>
                <button onClick={searchHandler}>
                  {!isSearch ? (
                    <img
                      src={Search}
                      className="pointer-events-none"
                      alt="search icon"
                    />
                  ) : (
                    <img
                      src={close}
                      className="pointer-events-none"
                      alt="close icon"
                    />
                  )}
                </button>
              </li>
              <li className="cursor-pointer">
                <p>KIDS</p>
              </li>
              <li className="cursor-pointer">
                <img src={GiftBox} alt="GiftBox" />
              </li>
              <li className="cursor-pointer">
                <img src={NotificationBell} alt="NotificationBell icon" />
              </li>
              <li className="flex items-center gap-[10px] cursor-pointer">
                <img src={ProfileImg} alt="Profile image" />
                <img src={DownArrow} alt="arrow down" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
