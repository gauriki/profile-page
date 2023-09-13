export function BackgroundImgCard() {
  return (
    <div className="relative bg-[#1E1E1E] my-8">
      <div className="grid text-center gap-6 md:grid-cols-4 text-white px-16 py-20">
        <div className="space-y-2">
          <p className="text-4xl font-semibold">555</p>
          <p className="text-base">Happy Clients</p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl font-semibold">222</p>
          <p className="text-base">Projects Finished</p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl font-semibold">444</p>
          <p className="text-base">Awards Won</p>
        </div>
        <div className="space-y-2">
          <p className="text-4xl font-semibold">777</p>
          <p className="text-base">Drinked Pepsi</p>
        </div>
      </div>
      <div className="background absolute inset-0" />
    </div>
  );
}
