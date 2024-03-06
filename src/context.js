import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

// export const API_URL=`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
export const API_URL=`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&plot=full`;


const AppProvider = ({ children }) => {

    const [isLoading,SetIsLoading]= useState(true);
    const [movie ,SetMovie]=useState([]);
    const [isError,SetIsError] =useState({show:"False",msq:""});
    const [query,setQuery]=useState("Tom and Jerry")

const getmovies = async(url)=>{
 try{
    const res=await fetch(url)
    const data = await res.json()
    console.log(data)
    if(data.Response === "True"){
        SetIsLoading(false);
        SetMovie(data.Search);
    }else{
        SetIsError({show:true ,msq:data})
    }

} 
 catch (e){
    console.log(e)
 }
}


useEffect(()=>{
    let timer = setTimeout(() => {
        getmovies(`${API_URL}&s=${query}`);
    }, 5000);
    return ()=> clearTimeout(timer)
},[query])
// useEffect(()=>{
    
//         getmovies(API_URL);
// },[])


  return <AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>{children}</AppContext.Provider>;
};

const useGlobalContext =()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext};
