import React from "react";

const Practice = ({ values, handleBtn, index }) => {
  const { img, song, arties, add } = values;
  return (
    <div
      className={`flex justify-between p-4  rounded-md relative  w-55 h-32 bg-zinc-100`}
    >
      <div className="bg-zinc-300 rounded-md  overflow-hidden w-20 h-20 ">
        <img className="object-cover w-full h-full" src={img} alt="imges" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-lg capitalize">{song}</h1>
        <h3 className="text-sm ">{arties}</h3>
      </div>

      <button
        onClick={() => handleBtn(index)}
        className={`${add ? "bg-green-600" : "bg-orange-600"}   absolute left-1/2 bottom-0 whitespace-nowrap  -translate-x-[50%] translate-y-[50%]  text-sm rounded-md p-2 text-white font-semibold `}
      >
        {add === true ? "Added" : "Add fevoruite"}
      </button>
    </div>
  );
};

export default Practice;
