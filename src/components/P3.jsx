import React from "react";

function P3() {
  return (
    <div className="flex justify-center">
      <div className="container justify-center  pt-10 pb-10">
        <div className="flex justify-center ">
          <p className="font-bold text-4xl">Amazing things are happening</p>
        </div>
        <div className="flex justify-center pb-10">
          <hr className="border-4 border-blue-600 w-36" />
        </div>
        <div className="flex justify-between pb-5">
          <div>
            <img src="Type1.png" />
          </div>
          <div>
            <img src="Type2.png" />
          </div>
          <div>
            <img src="Type3.png" />
          </div>
        </div>
        <div className="flex justify-center pb-5">
          <img src="carosolt.png" />
        </div>
        <div className="flex justify-center pb-5">
          <p className="font-bold text-4xl">Do you have a game code?</p>
        </div>
        <div className="flex justify-center">
          <p>Let’s play for a while!</p>
        </div>
      </div>
    </div>
  );
}

export default P3;
