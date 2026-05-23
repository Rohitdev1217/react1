import React, { useState } from "react";
import Practice from "./components/Practice";
import Navbar from "./components/Navbar";

const App = () => {
  const data = [
    {
      img: "https://i.scdn.co/image/ab6761670000ecd42ff4f703438a4f932200b1f6",
      song: "drop dead",
      arties: "Olivia Rodrigo",
      add: false,
    },
    {
      img: "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
      song: "taitor",
      arties: "Olivia Rodrigo",
      add: false,
    },
    {
      img: "https://i.scdn.co/image/ab6761670000ecd4d07b9631e56cb1d307665cfe",
      song: "perfect",
      arties: "Ed Sheeran",
      add: false,
    },
    {
      img: "https://i.scdn.co/image/ab67616d0000b273629dc9e2e3bc20bbd7d92e4a",
      song: "Baby",
      arties: "justin biber",
      add: false,
    },
  ];

  const [songData, setSongData] = useState(data);

  const handleBtn = (CardIndex) => {
    setSongData((prev) => {
      return prev.map((item, index) => {
        if (index === CardIndex) {
          return { ...item, add: !item.add };
        }

        return item;
      });
    });
  };

  return (
    <div>
      <Navbar data={songData} />
      <div className="px-20 flex gap-10 flex-wrap  mt-10">
        {songData.map((item, index) => (
          <Practice
            key={index}
            values={item}
            handleBtn={handleBtn}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
