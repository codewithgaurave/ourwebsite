import React from "react";

const BrandLogos = () => {
  const logos = [
    { name: "LOQO", style: "font-black tracking-tighter italic" },
    { name: "LOGO", style: "font-bold tracking-[10px] scale-x-75" },
    { name: "L.iiii!!", style: "font-black text-2xl uppercase" },
    { name: "LOGO", style: "font-extrabold tracking-widest" },
    { name: "IPSUM", style: "font-black tracking-tighter uppercase" },
  ];

  return (
    <div className="py-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8">
      {logos.map((logo, idx) => (
        <div key={idx} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl h-20 flex items-center justify-center group uppercase hover:border-white/20 hover:-translate-y-2 transition-all duration-400 cursor-pointer">
            <span
              className={`text-3xl text-white/20 group-hover:text-white/80 transition-all duration-500 font-syne ${logo.style}`}
            >
              {logo.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandLogos;
