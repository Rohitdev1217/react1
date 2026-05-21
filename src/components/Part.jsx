import React from "react";

const Part = () => {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1773332589460-5a5d43c80f5b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "my home ",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      mood: true,
    },

    {
      img: "https://images.unsplash.com/photo-1777633150161-f3d4390fe695?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "universe",
      desc: "lorem ipsum dolor sit, amet consectetur adipisicing.",
      mood: false,
    },
    {
      img: "https://images.unsplash.com/photo-1773332611613-dbdc64f09807?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "gardening",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
      mood: true,
    },
  ];

  return (
    <div className="w-full    h-screen flex justify-center items-center gap-10 bg-zinc-200">
      {data.map((item, index) => (
        <div>
          <div
            key={index}
            className="bg-zinc-300 w-52    overflow-hidden rounded-md"
          >
            <div className="w-full h-32 ">
              <img
                className="object-cover w-full h-full "
                src={item.img}
                alt=""
              />
            </div>
            <div className="bg-zinc-50 px-3 py-2 w-full">
              <h1 className="text-lg capitalize">{item.title}</h1>
              <p className="text-sm mt-2 ">{item.desc}</p>

              <button
                className={`${item.mood ? "bg-green-500" : "bg-red-400"} text-xs  px-2 py-1 mt-3 text-white rounded-md`}
              >
                {item.mood ? "happy" : "sad"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Part;
