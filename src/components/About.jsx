import { useState } from "react";
import pfp from "../assets/Goose/goose.jpg";

function About({ name, description }) {
  const [showMore, setShowMore] = useState(true);

  return (
    <section className="bg-blue-400 py-6 flex justify-center items-center h-full w-full ">
      <div className="flex justify-between mx-10 border-2 rounded-4xl bg-blue-500 border-white items-center w-3/5">
        <div className="w-1/2 my-5 mx-5 flex flex-col">
          <h1 className="font-mono font-bold text-white text-5xl mb-5 ">
            {name}
          </h1>
          {showMore ? (
            <p className="font-mono font-bold text-white mb-5 ">
              Description...
            </p>
          ) : (
            <p className="font-mono font-bold text-white mb-5 text-xl">
              {description}
            </p>
          )}
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-white w-fit px-2 rounded font-bold font-mono hover:bg-blue-400 hover:border-2 hover:border-white hover:text-2xl hover:text-white mt-auto"
          >
            {showMore ? "Show More" : "Show Less"}
          </button>
        </div>
        <div className=" w-1/2 border-3 m-3 rounded-2xl border-white">
          <img src={pfp} alt="pfp" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
}
export default About;
