import React from "react";

const Props = ({ text, color }) => {
  return (
    <div className="">
      <button className={`${color} px-3 py-2 m-2 text-sm  rounded-md`}>
        {text}
      </button>
    </div>  
  );
};

export default Props;
