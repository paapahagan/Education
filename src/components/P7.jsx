import React from "react";

function P7() {
  return (
    <div className="flex justify-center mt-10 mb-10">
      <div className="container">
        <div className="flex justify-evenly divide-x-4 pb-10">
          <div></div>
          <div className="mr-5 pl-2">
            <p>More than 50% of US</p>
            <p>teachers use Kurtis</p>
          </div>
          <div className="mr-5 pl-2">
            <p>Players in more than 200</p>
            <p>countries</p>
          </div>
          <div className="mr-5 pl-2">
            <p>Over 30 million public</p>
            <p>games available</p>
          </div>
          <div className="mr-5 pl-2">
            <p>97% of the Fortune</p>
            <p>500 use Kurtis</p>
          </div>
        </div>
        {/* section 2 */}
        <div className="flex justify-center">
          <div>
            <img src="h.png" />
          </div>
          <div className="grid content-center">
            <p className="text-6xl font-bold pb-5">Ready for make</p>
            <p className="text-6xl font-bold">learning fun! </p>
            <div className="mt-10">
              <button className="inline-flex px-6 py-2 bg-blue-600 text-white rounded">
                Sign up for free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default P7;
