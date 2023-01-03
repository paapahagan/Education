import React from "react";

function P5() {
  return (
    <div className="flex justify-center bg-slate-200">
      <div className="container justify-center  pt-10 pb-10">
        <div className="flex justify-center pb-5">
          <div className="text-3xl mr-4">
            <p>Still more?</p>
          </div>
          <div className="text-3xl font-bold">
            <p>Take a look to our features games</p>
          </div>
        </div>
        <div className="flex justify-center text-3xl font-bold">
          <p>How does Kurtis work?</p>
        </div>
        <div className="flex justify-center pb-10">
          <hr className="border-4 border-blue-600 w-36" />
        </div>
        {/* images section */}
        <div className="flex justify-evenly pb-10">
          <div className="mr-10">
            <img src="m3.png" />
          </div>
          <div className="mr-10">
            <p className="text-3xl font-bold">Create</p>
            <p className="text-2xl ">It only takes minutes to create a </p>
            <p className="text-2xl ">learning game or trivia quiz on </p>
            <p className="text-2xl ">any topic, in any language.</p>
          </div>
        </div>
        <div className="flex justify-end pb-10">
          <div className="">
            <p className="text-3xl font-bold">Host or share</p>
            <p className="text-2xl ">Host a live game with questions </p>
            <p className="text-2xl ">on a big screen or share a game </p>
            <p className="text-2xl ">with remote players.</p>
          </div>
          <div className="grid justify-items-end">
            <img src="m1.png" />
          </div>
        </div>
        <div className="flex justify-evenly pb-10">
          <div className="mr-10 grid justify-items-start ">
            <img src="m2.png" />
          </div>
          <div className="mr-10 pt-5">
            <p className="text-3xl font-bold">Play</p>
            <p className="text-2xl ">Game on! Join a kahoot with a </p>
            <p className="text-2xl ">PIN provided by the host and </p>
            <p className="text-2xl ">answer questions on your device.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default P5;
