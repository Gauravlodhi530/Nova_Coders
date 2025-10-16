export default function StatsBox() {
  return (
    <div className=" rounded-xl bg-[#0b1929] border border-[#224066] p-8 flex justify-between items-center shadow-lg m-5">
      {/* 1st Stat */}
      <div className="text-center flex-1">
        <div className="text-3xl font-bold text-white">500+</div>
        <div className="text-base text-gray-300">Participants</div>
      </div>
      {/* Divider */}
      <div className=" h-12 bg-[#224066] mx-8 opacity-50 hidden md:block"></div>
      {/* 2nd Stat */}
      <div className="text-center flex-1">
        <div className="text-3xl font-bold text-white">50+</div>
        <div className="text-base text-gray-300">Members</div>
      </div>
      {/* Divider */}
      <div className="w-px h-12 bg-[#224066] mx-8 opacity-50 hidden md:block"></div>
      {/* 3rd Stat */}
      <div className="text-center flex-1">
        <div className="text-3xl font-bold text-white">24/7</div>
        <div className="text-base text-gray-300">Active</div>
      </div>
    </div>
  );
}
