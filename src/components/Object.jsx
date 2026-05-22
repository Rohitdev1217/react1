import React, { useState } from "react";

const Object = () => {
  const [val, setval] = useState([
    { name: "rohit", age: 21 },
    { name: "vishwakarma", age: 23 },
    { name: "suthar", age: 22 },
  ]);
  return (
    <div className="p-5">
      {val.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <p>Age: {item.age}</p>
        </div>
      ))}

      <button
        onClick={() =>
          setval(
            val.map((item) =>
              item.name === "suthar" ? { name: "name ", age: 24 } : item,
            ),
          )
        }
        className="py-1 bg-blue-400 rounded-md px-3"
      >
        Click
      </button>
    </div>
  );
};

export default Object;
