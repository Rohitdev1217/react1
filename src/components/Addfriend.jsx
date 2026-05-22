import React, { useState } from "react";

const Addfriend = ({ values }) => {
  const { name, img, role } = values;
  return (
    <div className="bg-zinc-200  rounded-md overflow-hidden     w-70 ">
      <div className="w-full h-40 overflow-hidden   bg-blue-400 ">
        <img
          className="object-cover object-[center_top ] "
          src={img}
          alt="user-image"
        />
      </div>
      <div className=" w-full  p-2 bg-white">
        <h1 className="text-lg">{name}</h1>
        <h5>{role}</h5>
        <button className="bg-blue-400 mt-3 text-white text-sm font-semibold p-1 rounded-md">
          Add Friend
        </button>
      </div>
    </div>
  );
};
export default Addfriend;
