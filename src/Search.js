import React from "react";
import { CiSearch } from "react-icons/ci";
import "./index.css";
import { useGlobalContext } from "./context";

const Search = () => {
  const {query,setQuery}=useGlobalContext();
  return (
    <section className=" h-80 overflow-hidden bg-[#131520] flex justify-center items-center">


      <div className=" pl-3 w-1/2 h-16 bg-white bg-opacity-70 rounded-lg flex items-center gap-3">
      <CiSearch className="text-white" />
      <form action="#" onSubmit={(e)=> e.preventDefault()}>
    
      <input type="text" className=" bg-transparent focus:outline-0 text-white text-lg placeholder-white  " placeholder="Search Movies" value={query} onChange={(e)=>{
        
        setQuery(e.target.value) 
      }}/>
        </form>
      </div>
    </section>
  );
};

export default Search;
