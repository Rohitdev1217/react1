const Addfriend = ({ values, handleFirendBtn, index }) => {
  const { name, img, role, friend } = values;
  return (
    <div className="bg-zinc-200  rounded-md overflow-hidden w-70 ">
      <div className="w-full h-40 bg-zinc-100 overflow-hidden  ">
        <img
          className="object-cover w-full h-full object-[center_top ] "
          src={img}
          alt="user-image"
        />
      </div>
      <div className=" w-full  p-2 bg-white">
        <h1 className="text-lg">{name}</h1>
        <h5>{role}</h5>
        <button
          onClick={() => handleFirendBtn(index)}
          className={`${friend ? "bg-green-400" : "bg-blue-400"} mt-3 text-white text-sm font-semibold p-1 rounded-md`}
        >
          {friend === true ? "Friend" : "Add Friend"}
        </button>
      </div>
    </div>
  );
};
export default Addfriend;
