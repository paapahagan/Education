import React from "react";

function Nav() {
  return (
    <div className="flex justify-center m-10">
      <div className=" container flex justify-between">
        <div className="flex items-center ">
          <img src="Logo.png" className="mr-5" />
          <p className="text-2xl">Kurtis Classrom</p>
        </div>
        <div className="flex items-center">
          <p className="mr-5">EN</p>
          <button className="mr-5 inline-flex px-4 py-1 bg-blue-600 text-white rounded">
            Sign up
          </button>
          <button className="mr-5 inline-flex px-4 py-1 border rounded">
            Sign up
          </button>
          <button>
            <img src="Group 16.png" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
