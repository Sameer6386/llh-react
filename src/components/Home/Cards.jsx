import React from "react";

const Cards = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="flex w-full  justify-between mt-10">
      {data.map((item, index) => (
        <div
          key={index}
          className=" h-full rounded-md card w-[32%]  shadow-xl hover:scale-105 duration-200"
        >
          <img className="h-56 object-cover rounded-md" src={item.src} alt="" />
          <h2 className="px-4 mt-8 text-2xl">{item.title}</h2>
          <p className=" px-4 text-zinc-600 mt-6 mb-10 ">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
