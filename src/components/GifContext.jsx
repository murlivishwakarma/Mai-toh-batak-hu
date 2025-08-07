import { fetchGifs } from "./ApiService";
import { createContext, useEffect } from "react";
import { useState } from "react";

export const GifContext = createContext();


export const GifContextprovider =({children})=>{
      
        const [gif,setGif] = useState([]);
      
            const [keyWord,setKeyWord] = useState("angry");
            const [limit,setLimit] = useState(5);
           
      
            const [error,setError] = useState(false);
            const [loading,setLoading] = useState(false);
      
      
             const apiKey = "MOzlStWEYyxgZdJQvplttbbIQjI7gSM0";
             const term = `${keyWord}+silly+goose`

              const fetchData = async () => {
                try {
                  setLoading(true);
                  const data = await fetchGifs(apiKey, term, limit);
                  setGif(data);
                } catch (err) {
                  console.log("error =", err);
                  setError(true);
                } finally {
                  setLoading(false);
                }
              };
             useEffect(()=>{
                    
                      fetchData();

             },[keyWord,limit])
    return (
        <>
             <GifContext.Provider value={{gif,setGif,keyWord,setKeyWord,limit,setLimit,error,setError,loading,setLoading}}>
                {children}
             </GifContext.Provider>
        </>
    )

}

