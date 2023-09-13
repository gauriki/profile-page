import { BiLogoFacebook, BiLogoTelegram, BiLogoTwitter } from "react-icons/bi";
import { BsMusicNote } from "react-icons/bs";
import { PiDribbbleLogoFill } from "react-icons/pi";

export function Footer() {
  return (
    <footer className="bg-[#000000] text-white flex flex-col md:justify-between items-center px-2 py-10 md:py-6 md:px-14 gap-6 ">
      <p className="text-base md:text-lg">
        © Copyright 2019-2021. All rights are reserved.
      </p>
      <div className="flex gap-4">
        <BiLogoFacebook className="md:text-2xl" />
        <BiLogoTwitter className="md:text-2xl" />
        <PiDribbbleLogoFill className="md:text-2xl" />
        <BsMusicNote className="md:text-2xl" />
        <BiLogoTelegram className=" md:text-2xl" />
      </div>
    </footer>
  );
}
