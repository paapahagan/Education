import React from "react";

function P2() {
  return (
    <div className="flex justify-center  bg-slate-100">
      <div className="container justify-center pt-10 ">
        <div className="flex justify-center">
          <p className="font-bold text-4xl">Who is kurtis for?</p>
        </div>
        <div className="flex justify-center pb-10">
          <hr className="border-4 border-blue-600 w-36" />
        </div>
        <div>
          <div className="flex justify-evenly mt-10">
            <div>
              <img src="icon.png" className="mb-5" />
              <p className="mb-5 text-lg font-bold">At school</p>

              <p>Engaging group and </p>
              <p>distance learning for</p>
              <p>teachers and students.</p>

              <div className="pt-5">
                <p>Learn more</p>
              </div>
            </div>
            <div>
              <img src="icon2.png" className="mb-5" />
              <p className="mb-5 text-lg font-bold">At work</p>

              <p>Engaging group and </p>
              <p>distance learning for</p>
              <p>teachers and students.</p>

              <p className="mt-5">Learn more</p>
            </div>
            <div>
              <img src="icon3.png" className="mb-5" />
              <p className="mb-5 text-lg font-bold">AT home</p>

              <p>Engaging group and </p>
              <p>distance learning for</p>
              <p>teachers and students.</p>

              <p className="mt-5">Learn more</p>
            </div>
            <div>
              <img src="icon4.png" className="mb-5" />
              <p className="mb-5 text-lg font-bold">Learning apps</p>

              <p>Engaging group and </p>
              <p>distance learning for</p>
              <p>teachers and students.</p>

              <p className="mt-5">Learn more</p>
            </div>
          </div>
          <div className="flex justify-center m-10">
            <button className="inline-flex px-4 py-1 bg-blue-600 text-white rounded drop-shadow-2xl">
              SIGN UP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default P2;
