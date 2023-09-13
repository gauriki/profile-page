import { BsShare, BsWebcam } from "react-icons/bs";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TbBrandTelegram } from "react-icons/tb";
import { ServicesCard } from "./servicesCard";

export function ServiceCard() {
  return (
    <div className="bg-[#F9F9F9] px-6 py-8 md:px-28 md:py-20">
      <p className="text-[#E65F78] text-sm md:text-base font-medium">
        SERVICES
      </p>
      <h1 className="text-xl md:text-3xl font-extrabold font-[poppins] pb-10">
        Quality Services
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        <ServicesCard
          icon={<HiOutlineLightBulb className="text-6xl text-[#e65f78]" />}
          title="Creative Design"
          description="Web design is a similar process of creation, with the intention of presenting..."
        />
        <ServicesCard
          icon={<BsWebcam className="text-6xl text-[#e65f78]" />}
          title="Web Development"
          description="Web design is a similar process of creation, with the intention of presenting..."
        />
        <ServicesCard
          icon={<TbBrandTelegram className="text-6xl text-[#e65f78]" />}
          title="Brand Identity"
          description="Web design is a similar process of creation, with the intention of presenting..."
        />
        <ServicesCard
          icon={<DiPhotoshop className="text-6xl text-[#e65f78]" />}
          title="Adobe Photoshop"
          description="Web design is a similar process of creation, with the intention of presenting..."
        />
        <ServicesCard
          icon={<DiIllustrator className="text-6xl text-[#e65f78]" />}
          title="Adobe Illustrator"
          description="Web design is a similar process of creation, with the intention of presenting..."
        />
        <ServicesCard
          icon={<BsShare className="text-5xl text-[#e65f78]" />}
          title="Social Media"
          description="Web design is a similar process of creation, with the intention of presenting..."
        />
      </div>
      <h1 className="text-base md:text-lg text-[#333333] py-4">
        Are you interested in working with me?{" "}
        <a href="#" className="text-[#000000] font-semibold">
          Let&apos;s started now
        </a>
      </h1>
    </div>
  );
}
