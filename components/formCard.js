export function FormCard() {
  return (
    <div className="px-6 py-8 md:py-16 md:px-16 flex flex-col items-center">
      <p className="text-[#E65F78] text-sm md:text-base font-medium">CONTACT</p>
      <h1 className="text-xl md:text-3xl font-extrabold py-2">Get in Touch</h1>
      <p className="font-[mulish] text-[#333333] text-base py-6 text-center ">
        Please fill out the form on this section to contact with me. Or call{" "}
        <br className="md:block hidden" /> between 9:00 a.m. and 8:00 p.m. ET,
        Monday through Friday
      </p>
      <form className="flex flex-col gap-8">
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-400 px-2 py-2 text-start text-[#000000] text-[13px]"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-400 px-2 py-2 text-start text-[#000000] text-[13px]"
        />
        <textarea
          type="massage"
          placeholder="Massage"
          className="border border-gray-400 px-2 py-2 text-start text-[#000000] text-[13px] max-w-[80vw] w-[400px]"
        />
      </form>
      <button className="btn  bg-[#E96F86] w-[400px] max-w-[80vw] text-white my-3 ">
        Download CV
      </button>
    </div>
  );
}
