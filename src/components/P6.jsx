import React from "react";

function P6() {
  return (
    <div className="flex justify-center bg-blue-600">
      <div className="container justify-center  pt-10 pb-10">
        <div className="flex justify-center ">
          <p className="font-bold text-4xl">Our best customers</p>
        </div>
        <div className="flex justify-center pb-10">
          <hr className="border-4 border-white w-36" />
        </div>

        <div className="grid grid-cols-2 divide-x-4 pb-10">
          <div className="grid justify-items-center pr-10">
            <img src="/3.png" />
          </div>

          <div className="text-white text-xl pl-10">
            <p className=" font-bold pb-5">Martha | Norwegian Air</p>

            <p>
              Recusandae sunt voluptate repellat velit dolorem eos nostrum
              cupiditate.
            </p>
            <p>
              Labore porro cupiditate reiciendis enim neque. Modi eos autem
              expedita
            </p>
            <p className="pb-5">voluptatibus dignissimos repellat. </p>
            <p>
              Sit et aut minus quod vitae. Aut occaecati cupiditate neque dolore
              amet
            </p>
            <p className="pb-10">beatae quasi aliquam.</p>

            <div>
              <img src="image 4.png" />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <img src="Group 20.png" />
        </div>
      </div>
    </div>
  );
}

export default P6;
