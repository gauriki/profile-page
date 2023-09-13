export function ServicesCard(p) {
  return (
    <div className="shadow bg-white py-12 px-8 space-y-4 ">
      {p.icon}
      <p className="text-[#000000] text-base md:text-lg font-semibold">
        {p.title}
      </p>
      <p className="font-[mulish] text-[#333333] text-sm md:text-base">
        {p.description}
      </p>
    </div>
  );
}
