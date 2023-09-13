import Typewriter from "typewriter-effect";

export function ImageCard() {
  return (
    <div className="image relative h-[calc(100vh-96px)] w-full">
      <div className="absolute top-0 left-0 bottom-0 right-0 z-1 bg-gradient-to-b from-[rgba(0,0,0,.3)] to-[rgba(0,0,0,.6)]"></div>
      <div className="absolute flex justify-center flex-col items-center top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]">
        <img
          src="/images/me.png"
          alt=""
          width={240}
          height={240}
          className="rounded-full border-8 border-[#163344]"
        />
        <h1 className="text-white text-4xl font-bold text-center py-6">
          GAURI <span className="text-[#e65f78]">BHALERAO</span>
        </h1>
        <div className="text-white text-base md:text-xl font-bold flex gap-2">
          <p>I&apos;m a</p>
          <Typewriter
            options={{
              strings: ["Web Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
