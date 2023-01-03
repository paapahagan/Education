import React from "react";

function P8() {
  return (
    <div className="flex justify-center  bg-blue-600">
      <div className=" container flex justify-evenly pt-10 pb-10">
        <div>
          <div className="flex justify-center items-center pb-10">
            <img src="Logo1.png" className="mr-2" />
            <p className=" font-bold text-2xl text-white font-serif-apple ">
              Kurtis Classrom
            </p>
          </div>
          {/* app store */}
          <div className="mb-5">
            <p className=" text-white">Get the app:</p>
          </div>
          <div className="flex mb-5">
            <img src="apple.png" className="mr-2" />
            <img src="google.png" />
          </div>
          <div>
            <img src="" />
          </div>
          <div className="mb-5">
            <p className=" text-white">Follow us:</p>
          </div>
          {/* socials */}
          <div className="flex">
            <img src="li.png" className="mr-2" />
            <img src="fb.png" className="mr-2" />
            <img src="in.png" className="mr-2" />
            <img src="tw.png" className="mr-2" />
            <img src="tk.png" />
          </div>
        </div>
        <div className=" text-white">
          <p className=" font-bold mb-10 text-xl">About</p>

          <p className="mb-2">Company</p>
          <p className="mb-2">Leadership</p>
          <p className="mb-2">Jobs - HIRING!</p>
          <p className="mb-2">Pricing</p>
          <p className="mb-2">Press</p>
          <p className="mb-2">Investors</p>
        </div>
        <div className=" text-white">
          <p className=" font-bold mb-10 text-xl">Solutions</p>

          <p className="mb-2">At School</p>
          <p className="mb-2">At Work</p>
          <p className="mb-2">At Home</p>
        </div>
        <div className=" text-white">
          <p className=" font-bold mb-10 text-xl">Resources</p>

          <p className="mb-2">Study with Kurtis</p>
          <p className="mb-2">Blog</p>
          <p className="mb-2">Kurtis Certified</p>
          <p className="mb-2">Help Center</p>
          <p className="mb-2">Library</p>
          <p className="mb-2">Shop</p>
          <p className="mb-2">Safety center</p>
        </div>
        <div className=" text-white">
          <p className=" font-bold mb-10 text-xl">Terms and conditions</p>

          <p className="mb-2">Terms and Conditions</p>
          <p className="mb-2">Privacy Policy</p>
          <p className="mb-2">US Privacy Laws</p>
          <p className="mb-2">Children’s Privacy Policy</p>
          <p className="mb-2">Inclusion and Accessibility policy</p>
        </div>
      </div>
    </div>
  );
}

export default P8;
