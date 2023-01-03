import React from "react";

function P1() {
  return (
    <div className="flex justify-center mb-10">
      <div className="container flex justify-around bg-white">
        <div className="">
          <div className="">
            <p className="text-8xl font-bold py-5">Make</p>
            <p className="text-8xl font-bold pb-5">Learning Fun!</p>
            <p className="text-lg">Any subject, in any language, on any </p>
            <p className="text-lg pb-10">device, for all ages!</p>
            <button className="inline-flex px-4 py-2 mb-5 bg-blue-600 rounded text-white">
              Sign up for free
            </button>
          </div>
          <div>
            <p className="font-bold pb-3">Or download the app:</p>

            <div className="flex ">
              <div className="mr-2">
                <a href="">
                  <img src="apple.png" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src="google.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* image */}
        <div>
          <img src="art.png" />
        </div>
      </div>
    </div>
  );
}

export default P1;
