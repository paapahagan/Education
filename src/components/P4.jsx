import React from "react";

function P4() {
  return (
    <div className="flex justify-center  bg-yellow-400 pt-40 pb-40">
      <div className="grid items-center">
        <div className="flex justify-center items-center pb-10">
          <img src="Logo1.png" />
          <p className=" font-bold text-2xl text-white font-serif-apple ">
            Kurtis Classrom
          </p>
        </div>
        <div className="">
          <button className="flex justify-center bg-slate-50 px-4 py-2 rounded-2xl">
            <p className="mr-2 font-bold text-slate-400">Write the code here</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="grey"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center text-slate-400 pt-5">
          Or try with 1234
        </div>
      </div>
    </div>
  );
}

export default P4;
