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
import { GrHomeRounded, GrHistory } from "react-icons/gr";
import { BsCollectionPlay, BsPlayCircle } from "react-icons/bs";
import {
  MdOutlineVideoLibrary,
  MdSmartDisplay,
  MdPlayCircle,
} from "react-icons/md";
import { GiFilmStrip, GiPlayButton } from "react-icons/gi";
import { BiNews } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div>
      <div className="hidden lg:flex fixed left-0 top-16 w-[12rem] h-screen bg-white overflow-y-scroll p-5 ease-in duration-500">
        <div className="flex-col divide-y-2  ">
          <div className="flex-col space-y-4  pb-4">
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
          <div className="pb-16">
            <p className="flex items-center text-slate-400 space-x-4 text-sm">
              TentangPersHak ciptaHubungi kamiKreatorBeriklanDeveloper
              PersyaratanPrivasiKebijakan & KeamananCara kerja YouTubeUji fitur
              baru
            </p>

            <div className="flex items-center justify-center text-slate-400 text-sm">
              <AiOutlineCopyrightCircle className="text-sm " />
              <p className="text-sm">2022 Code and Cat</p>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar when its md to lg */}
      <div className="hidden sm:flex lg:hidden fixed left-0 top-16 w-[5rem] h-screen bg-white pt-4 ease-in duration-500">
        <div className="flex flex-col items-center space-y-4  ">
          <div className="flex flex-col items-center space-y-1 text-center ">
            <GrHomeRounded className="text-base " />
            <p className="text-xs">Beranda</p>
          </div>
          <div className="flex flex-col items-center space-y-1 text-center ">
            <BsPlayCircle className="text-base" />
            <p className="text-xs">Shorts</p>
          </div>
          <div className="flex flex-col items-center space-y-1 text-center ">
            <BsCollectionPlay className="text-base" />
            <p className="text-xs">Subscription</p>
          </div>
          <div className="flex flex-col items-center space-y-1 text-center ">
            <MdOutlineVideoLibrary className="text-base" />
            <p className="text-xs">Koleksi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
