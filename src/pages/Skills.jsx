import Header from "../components/Header";
import SkillCard from "../components/SkillCard";
import {useEffect} from "react"
import { useState } from "react";
import { useRef } from "react";
import OfflineSkills from  "./OfflineSkills"
import { fetchGifs } from "../components/ApiService";
import { GifContext } from "../components/GifContext";
import { useContext } from "react";
import Loader from "../components/Loader";


function Skills(){
  

      const selectref = useRef(null);

      const {gif,loading,error,keyWord,limit,setKeyWord,setLimit,setLoading} = useContext(GifContext);
       

       const handleChange =(e) =>{
             console.log(selectref.current.value);
             setKeyWord(selectref.current.value || "angry");
       }
       
    return (
      <>
        {loading === true ? (
          <>
           <Loader />
         
          </>
        ) : error ? (
          <OfflineSkills />
        ) : (
          <div className="flex flex-col items-center h-screen w-screen bg-blue-400">
            <Header />
            <div className="flex bg-red-700 flex-col gap-1 items-center p-2  mt-10 text-white-xl border-2 border-white rounded-xl">
              <h1 className="text-white text-3xl font-serif">
                Select type of Goose
              </h1>
              <select
                className="bg-blue-400 w-100  text-white p-1 rounded-xl border-4"
                ref={selectref}
                onChange={handleChange}
                value={keyWord}
              >
                <option className="bg-blue-600 text-white hover:bg-blue-600">
                  angry
                </option>
                <option className="bg-blue-600 hover:bg-blue-600">happy</option>
                <option className="bg-blue-600 border-2 hover:bg-blue-500">
                  dancing
                </option>
              </select>

              <select
                className="bg-blue-400 w-100  text-white p-1 rounded-xl border-4"
                onChange={(e) => setLimit(e.target.value)}
                value={limit}
              >
                <option value="5">5</option>
                <option>7</option>
                <option>10</option>
                <option>20</option>
              </select>
            </div>

            <div className="flex flex-wrap gap-3 items-center justify-center w-full h-full overflow-y-auto p-4">
              {gif &&
                gif.map((gifItem) => (
                  <SkillCard
                    key={gifItem.id}
                    photo={gifItem.images.fixed_height.url}
                    skillname={gifItem.title || keyWord}
                  />
                ))}
            </div>
            <hr className="border-t border-white w-full" />
          </div>
        )}
      </>
    );
}

export default Skills;

