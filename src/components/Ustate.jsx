import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
const Ustate = () => {
  const [val, setVal] = useState(false);
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center ">
      <div className="relative w-120 h-70 bg-zinc-200 flex   rounded-md overflow-hidden ">
        <img
          className={`shrink-0 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} delay-200 transition-transform  object-cover w-full h-full`}
          src="https://images.unsplash.com/photo-1777633150161-f3d4390fe695?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`shrink-0 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"} delay-200 transition-transform object-cover w-full h-full`}
          src="https://images.unsplash.com/photo-1778546978501-58b8908583ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
        />
        <span
          onClick={() => setVal(() => !val)}
          className={`flex cursor-pointer w-8 h-8 bg-[#dadada7b] absolute rounded-full  left-1/2 bottom-[5%] -translate-x-[50%] -translate-y-[50%] flex items-center justify-center ${val === false ? "rotate-0" : "rotate-180"} delay-200 transition-transform    items-center justify-center`}
        >
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
};

export default Ustate;

