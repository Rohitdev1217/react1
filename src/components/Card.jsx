import React, { useState } from "react";

const Card = () => {
  const [val, setval] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div>
      {val.map((item) => (
        <h1>{item}</h1>
      ))}

      <button
        onClick={() =>
          setval(() => {
            return val.filter((item, index) => index != val.length - 1);
          })
        }
        className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm"
      >
        Click
      </button>
    </div>
  );
};

export default Card;
