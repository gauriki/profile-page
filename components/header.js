import { BiMenu } from "react-icons/bi";

export function Header() {
  return (
    <header className=" flex justify-between px-6 py-2 items-center">
      <img
        src="https://marketifythemes.net/html/arlo/img/logo/classic/dark.png"
        alt=""
        className="w-8 h-8 md:w-10 md:h-10"
      />
      <div className="hidden md:flex items-center gap-4">
        <a
          href="#"
          className="hover:text-[#e65f78] text-base font-medium hover:rounded-full hover:bg-[#f8d4db] w-20 h-20 flex justify-center items-center transform-gpu duration-700"
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-[#e65f78] text-base font-medium hover:rounded-full hover:bg-[#f8d4db] w-20 h-20 flex justify-center items-center transform-gpu duration-700"
        >
          About
        </a>
        <a
          href="#"
          className="hover:text-[#e65f78] text-base font-medium hover:rounded-full hover:bg-[#f8d4db] w-20 h-20 flex justify-center items-center transform-gpu duration-700"
        >
          Services
        </a>
        <a
          href="#"
          className="hover:text-[#e65f78] text-base font-medium hover:rounded-full hover:bg-[#f8d4db] w-20 h-20 flex justify-center items-center transform-gpu duration-700"
        >
          Protfolio
        </a>
        <a
          href="#"
          className="hover:text-[#e65f78] text-base font-medium hover:rounded-full hover:bg-[#f8d4db] w-20 h-20 flex justify-center items-center transform-gpu duration-700"
        >
          News
        </a>
        <a
          href="#"
          className="hover:text-[#e65f78] text-base font-medium hover:rounded-full hover:bg-[#f8d4db] w-20 h-20 flex justify-center items-center transform-gpu duration-700"
        >
          Contact
        </a>
      </div>
      <button className="md:hidden block text-2xl">
        <BiMenu />
      </button>
    </header>
  );
}
