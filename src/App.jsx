import Addfriend from "./components/Addfriend";
import { useState } from "react";

const App = () => {
  const data = [
    {
      name: "Alex",
      img: "https://images.unsplash.com/photo-1492462543947-040389c4a66c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "bankend developer",
      friend: true,
    },
    {
      name: "Herry",
      img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "Frontend Developer",
      friend: false,
    },
    {
      name: "Biliy",
      img: "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "Tech Leader",
      friend: true,
    },
  ];
  const [val, setVal] = useState(data);

  const handleFirendBtn = (cardIndex) => {
    setVal((prev) => {
      return prev.map((item, index) => {
        if (index === cardIndex) {
          return { ...item, friend: !item.friend };
        }
        return item;
      });
    });
  };

  return (
    <div className="flex w-full gap-5 h-screen bg-zinc-200 items-center justify-center">
      {val.map((item, index) => {
        return (
          <Addfriend
            handleFirendBtn={handleFirendBtn}
            index={index}
            key={index}
            values={item}
          />
        );
      })}
    </div>
  );
};

export default App;
