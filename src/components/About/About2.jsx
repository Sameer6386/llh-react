import React from "react";
const data = [
  {
    src: "https://www-eur-prd-lhh930-com.azureedge.net/us/en/-/media/mim-images/about-us/card-images/pg9-newcomponent_1.png?h=200&w=357&rev=b20c7d07199749dea511a88e939cb79c&hash=93AB586334AB3C55A536A94FE21B6ADA",
    title: "Build in demand skills",
    description:
      " Build stronger and more diverse tech talent through our Recruit-Train-Deploy solution, helping organizations fill today’s tech roles with tomorrow’s talent.",
  },
  {
    src: "https://www-eur-prd-lhh930-com.azureedge.net/us/en/-/media/mim-images/about-us/card-images/pg9-newcomponent_2.png?h=200&w=357&rev=07ca3989b51543f098c27588107ca5a6&hash=67010490AC99A175C6F17131717D28FE",
    title: "Digital coaching at scale",
    description:
      "Innovative and fully integrated technology that can change people’s lives, make teams happier, and turn entire companies into more inclusive, more productive places to be.",
  },
];
const About2 = () => {
  return (
    <div className=" mt-10 h-full  w-full ">
      <h1 className="text-4xl font-semibold w-[60%]">
        Digital solutions built for the evolving world of work
      </h1>

      <p className="text-2xl text-zinc-600 mt-4 w-[70%]">
        LHH is part of The Adecco Group - the world’s leading talent advisory
        and solutions company - and is enhanced by a variety of industry leading
        digital solutions including General Assembly and EZRA. Learn more about
        these solutions below.
      </p>

      <div className="card-container h-[70%] w-full  mt-10 flex justify-between">
        {data.map((item) => {
          return (
            <div className="card w-[48%] h-[90vh]  shadow-2xl hover:scale-105 duration-100">
              <img
                className="card-img w-full"
                src={item.src}
                alt={item.title}
              />
              <h2 className="card-title text-2xl font-semibold p-3 ">
                {item.title}
              </h2>
              <p className="card-description text-base p-3">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About2;
