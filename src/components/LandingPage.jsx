// import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-[24vh] px-14">
        {["We Create", "Eye opening", "presentations"].map((item, index) => (
          <div key={index} className="maske">
            <div className="w-fit flex items-center">
              {index === 1 && (
                <div className="mr-[1.2vw] w-[9.2vw] h-[4.45vw] relative top-[0.35vw] bg-red-500 rounded-md"></div>
              )}
              <h1 className="font-sans text-[6.25vw] leading-[6.2vw] tracking-tighter font-bold uppercase">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1.5px] border-zinc-600 px-14 py-3 mt-36 flex items-center justify-between">
        {[
          "For public and private capmpanies",
          "From the first pitch to IPO",
        ].map((item, idx) => (
          <p key={idx} className="text-lg font-light ">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-4 py-1 border-2 uppercase border-zinc-300 rounded-full">
            start the project
          </div>
          <div className="rotate-[45deg] rounded-full px-2 py-2 border-2 text-base flex items-center justify-center border-zinc-500">
            <FaArrowUpLong />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
