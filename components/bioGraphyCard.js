import { BiCalendar, BiSolidGift } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaBookReader, FaGraduationCap } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";
import { TbMailFilled } from "react-icons/tb";
import { TiLocation } from "react-icons/ti";
import Typewriter from "typewriter-effect";

export function BioGraphyCard() {
  return (
    <div className="md:p-28 p-10">
      <p className="text-[#E65F78] text-sm md:text-base font-medium">
        BIOGRAPHY
      </p>
      <h1 className="text-xl md:text-3xl font-extrabold">About Me</h1>
      <div className="flex md:flex-row flex-col items-start gap-10 md:gap-16 py-4">
        <div className="relative group ">
          <img
            alt=""
            src="/profile-page/images/me-2.jpg"
            className="md:w-[400px] md:h-[400px] w-[350px] h-[350px]"
          />
          <div className="absolute transform-gpu duration-500 group-hover:top-4 group-hover:right-4 top-3 md:w-[400px] w-[350px] h-[350px] md:h-[400px] right-3 bg-[#ea6e85] -z-[2]"></div>
        </div>
        <div className="flex flex-col">
          <div className="text-black text-base md:text-xl font-bold flex gap-2">
            <p>I&apos;m Gauri Bhalerao and</p>
            <div className="text-[#E65F78]">
              <Typewriter
                options={{
                  strings: ["Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <p className="text-[#333333] text-sm md:text-base py-6 font-[mulish]">
            Hi! My name is Albert Walkers. I am a Web Developer, and I&apos;m
            very passionate <br /> and dedicated to my work. With 20 years
            experience as a professional Web <br /> developer, I have acquired
            the skills and knowledge necessary to make your <br /> project a
            success.
          </p>
          <div className=" md:grid-cols-2 grid gap-6 pb-8">
            <p className=" md:text-base text-sm font-semibold text-[#000000] flex items-center gap-2">
              <BiSolidGift className="text-[#E65F78] text-lg md:text-xl" />
              Birthday:
              <span className="text-[#333333] font-normal"> 01.09.2000</span>
            </p>
            <p className="md:text-base text-sm font-semibold text-[#000000] flex items-center gap-2">
              <BiCalendar className="text-[#E65F78] text-lg md:text-xl" />
              Age:
              <span className="text-[#333333] font-normal"> 23</span>
            </p>
            <p className="md:text-base text-sm font-semibold text-[#000000] flex items-center gap-2">
              <TiLocation className="text-[#E65F78] text-lg md:text-xl" />
              Location:
              <span className="text-[#333333] font-normal">
                {" "}
                Yeola Road,Dahegaon.
              </span>
            </p>
            <p className="md:text-base text-sm font-semibold text-[#000000] flex items-center gap-2">
              <GiGamepad className="text-[#E65F78] text-lg md:text-xl" />
              Interests:
              <span className="text-[#333333] font-normal">
                {" "}
                Cooking,Watching
              </span>
            </p>
            <p className="md:text-base text-sm font-semibold text-[#000000] flex items-center gap-2">
              <FaBookReader className="text-[#E65F78] text-lg md:text-xl" />
              Study:
              <span className="text-[#333333] font-normal">
                {" "}
                Univercity Of Pune
              </span>
            </p>
            <p className="md:text-base text-sm font-semibold text-[#000000] flex items-center gap-2">
              <FaGraduationCap className="text-[#E65F78] text-lg md:text-xl" />
              Degree:
              <span className="text-[#333333] font-normal"> Bachelor</span>
            </p>
            <p className="md:text-base text-sm font-semibold text-[#000000] flex items-center gap-2">
              <TbMailFilled className="text-[#E65F78] text-lg md:text-xl" />
              Mail:
              <span className="text-[#333333] font-normal">
                {" "}
                gaurikatale157@gmail.com
              </span>
            </p>
            <p className="md:text-base text-sm font-semibold text-[#000000] flex items-center gap-2">
              <BsFillTelephoneFill className="text-[#E65F78] text-lg md:text-xl" />
              Phone:
              <span className="text-[#333333] font-normal"> 7823029053</span>
            </p>
          </div>
          <button className="btn  bg-[#E96F86] w-44 text-white">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
