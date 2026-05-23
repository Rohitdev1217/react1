import React from "react";

const Navbar = ({ data }) => {
  return (
    <div className=" w-full h-20  flex justify-between items-center px-20      ">
      <div>
        <h1 className="capitalize   text-xl font-semibold  ">Music</h1>
      </div>
      <div className="flex items-center  bg-orange-600 text-white p-2 gap-2 rounded-md">
        <button className="capitalize ">Fevourite</button>
        <p>{data.filter((item) => item.add).length}</p>
      </div>
    </div>
  );
};

export default Navbar;
