// import React from 'react'

function About() {
  return (
    <div className="w-full pt-24 pb-7 px-14 bg-[#CDEA68] rounded-2xl">
      <h1 className="text-black font-sans text-[4vw] leading-[3.8vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full border-t-[1px] border-[#A1B526] mt-14 py-[1vw] flex gap-5">
        <div className="w-1/2">
          <h1 className="text-[4vw] text-black tracking-tight">
            Our Approach:
          </h1>
          <button className="px-7 py-4 w-[13vw] bg-zinc-900 rounded-full text-white uppercase tracking-tight flex items-center justify-between">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[65vh] rounded-xl bg-green-700"></div>
      </div>
    </div>
  );
}

export default About;
