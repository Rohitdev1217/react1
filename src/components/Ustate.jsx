import React, { useState } from "react";

const Ustate = () => {
  const [val, setVal] = useState(false);
  return (
    <div>
      <h1>{val === true ? "bahar mat jao " : "bahar jao "}</h1>
      <button
        onClick={() => setVal((val) => !val)}
        className={`p-2 rounded-md ${val === true ? "bg-green-400" : "bg-red-400"}`}
      >
        Change
      </button>
    </div>
  );
};

export default Ustate;
