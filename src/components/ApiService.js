

export const fetchGifs= async(apiKey,term,limit=5)=>{
     
    const url =`https://api.giphy.com/v1/gifs/search?api_key=${encodeURIComponent(apiKey)}&q=${encodeURIComponent(term)}&limit=${limit}`;

    const response = await fetch(url);

    if(!response.ok) throw new Error("Network error");

    const data =await response.json();

    const gifData = data.data;

    return gifData;
    
     
}

