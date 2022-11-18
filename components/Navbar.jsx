import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiOutlineLike,
  AiOutlineMenu,
  AiOutlinePlaySquare,
  AiOutlineClockCircle,
  AiOutlineFire,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { TfiSearch, TfiMusic } from "react-icons/tfi";
import {
  BsMicFill,
  BsTrophy,
  BsCollectionPlayFill,
  BsFillFileEarmarkPlayFill,
} from "react-icons/bs";
import { TbDotsVertical } from "react-icons/tb";
import { CgProfile, CgGames } from "react-icons/cg";
import { GrHomeRounded, GrHistory } from "react-icons/Gr";
import { BsCollectionPlay, BsPlayCircle } from "react-icons/bs";
import {
  MdOutlineVideoLibrary,
  MdSmartDisplay,
  MdPlayCircle,
} from "react-icons/md";
import { GiFilmStrip, GiPlayButton } from "react-icons/gi";
import { BiNews } from "react-icons/bi";

const Navbar = ({ onFormSubmit }) => {
  const [nav, setNav] = useState(false);
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(term);
    onFormSubmit(term);
  };
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed left-0 top-0 w-full h-16 bg-white z-[100] ease-in-out duration-300">
      <div className="flex justify-between items-center w-full h-full  2xl:px-16">
        <div className=" flex items-center space-x-2 px-[1.2rem] ">
          <AiOutlineMenu onClick={handleNav} className="text-base" />
          <Link href="/" className="flex items-center">
            <FaYoutube className="text-4xl text-red-500" />
            <div className="font-bold font-oswald text-base">YouTube</div>
          </Link>
        </div>
        <form onSubmit={onSubmit} className="flex w-[40rem] items-center">
          <input
            type="text"
            onChange={(event) => setTerm(event.target.value)}
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Telusuri"
            required
          />
          <div className="bg-gray-200 border  border-gray-300 text-gray-700 text-sm rounded-r-full focus:ring-blue-500 focus:border-blue-500  p-3 w-16  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <TfiSearch className="ml-2 text-base" />
          </div>
          <div className="bg-gray-200 rounded-full p-2.5 ml-2">
            <BsMicFill className="text-base" />
          </div>
        </form>

        <div className="flex items-center px-8">
          <div>
            <TbDotsVertical className="text-base" />
          </div>
          <div className="border flex space-x-1 items-center border-gray-300 rounded-full px-2.5 py-1.5 text-center text-blue-800">
            <CgProfile className="text-base text-blue-600 font-light " />
            <p className="text-sm">Sign in</p>
          </div>
        </div>
      </div>

      {/* thesidebar */}
      <div
        className={
          nav
            ? "flex md:hidden fixed left-0 top-0 w-full h-screen bg-black/80"
            : "hidden"
        }
      >
        <div className="fixed left-0 top-0 w-[12rem] h-screen bg-white overflow-y-scroll p-5 ease-in duration-500">
          <div className=" flex items-center left-0 top-0 space-x-4 px-[1.2rem] fixed bg-white">
            <AiOutlineMenu onClick={handleNav} className="text-base" />
            <div className="flex items-center">
              <FaYoutube className="text-4xl text-red-500" />
              <div className="font-bold font-oswald text-base">YouTube</div>
            </div>
          </div>
          <div className="flex-col divide-y-2  ">
            <div className="flex-col space-y-4 pt-8 pb-4">
              <div className="flex space-x-4">
                <GrHomeRounded className="text-base" />
                <p className="text-sm">Beranda</p>
              </div>
              <div className="flex space-x-4">
                <BsPlayCircle className="text-base" />
                <p className="text-sm">Shorts</p>
              </div>
              <div className="flex space-x-4">
                <BsCollectionPlay className="text-base" />
                <p className="text-sm">Subscription</p>
              </div>
            </div>
            <div className="flex-col space-y-4 py-4">
              <div className="flex space-x-4">
                <MdOutlineVideoLibrary className="text-base" />
                <p className="text-sm">Koleksi</p>
              </div>
              <div className="flex space-x-4">
                <GrHistory className="text-base" />
                <p className="text-sm">Histori</p>
              </div>
              <div className="flex space-x-4">
                <AiOutlinePlaySquare className="text-base" />
                <p className="text-sm">Video Anda</p>
              </div>
              <div className="flex space-x-4">
                <AiOutlineClockCircle className="text-base" />
                <p className="text-sm">Tonton Nanti</p>
              </div>
              <div className="flex space-x-4 ">
                <AiOutlineLike className="text-base" />
                <p className="text-sm">Video yang disukai</p>
              </div>
            </div>
            <div className="flex-col py-4">Subscription</div>
            <div className="flex-col space-y-4 py-4">
              <div>Eksplorasi</div>
              <div className="flex space-x-4">
                <AiOutlineFire className="text-base" />
                <p className="text-sm">Trending</p>
              </div>
              <div className="flex space-x-4">
                <TfiMusic className="text-base" />
                <p className="text-sm">Music</p>
              </div>
              <div className="flex space-x-4">
                <GiFilmStrip className="text-base" />
                <p className="text-sm">Film</p>
              </div>
              <div className="flex space-x-4">
                <CgGames className="text-base" />
                <p className="text-sm">Game</p>
              </div>
              <div className="flex space-x-4 ">
                <BiNews className="text-base" />
                <p className="text-sm">Berita</p>
              </div>
              <div className="flex space-x-4 ">
                <BsTrophy className="text-base" />
                <p className="text-sm">Olahraga</p>
              </div>
            </div>
            <div className="flex-col space-y-4 py-4">
              <div>Lainnya dari YouTube</div>
              <div className="flex space-x-4">
                <MdPlayCircle className="text-base text-red-600" />
                <p className="text-sm">YouTube Premium</p>
              </div>
              <div className="flex space-x-4">
                <MdSmartDisplay className="text-base text-red-600" />
                <p className="text-sm">Creator Studio</p>
              </div>
              <div className="flex space-x-4">
                <GiPlayButton className="text-base text-red-600" />
                <p className="text-sm">YouTube Music</p>
              </div>
              <div className="flex space-x-4">
                <BsCollectionPlayFill className="text-base text-red-600" />
                <p className="text-sm">Youtube Kids</p>
              </div>
              <div className="flex space-x-4 ">
                <BsFillFileEarmarkPlayFill className="text-base text-red-600" />
                <p className="text-sm">Youtube TV</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="  text-slate-400 text-[2px]">
                TentangPersHak cipta Hubungi kami Kreator Beriklan Developer
                PersyaratanPrivasi Kebijakan & Keamanan Cara kerja YouTube Uji
                fitur baru
              </p>

              <div className="flex items-center justify-center text-slate-400 ">
                <AiOutlineCopyrightCircle className="text-[4px] " />
                <p className="text-[2px]">2022 Code and Cat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
