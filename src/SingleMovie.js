import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { API_URL } from "./context";

const SingleMovie = () => {
  // const movie = {
  //   Title: "Le syndrome du Titanic",
  //   Year: "2009",
  //   Rated: "N/A",
  //   Released: "07 Oct 2009",
  //   Runtime: "93 min",
  //   Genre: "Documentary",
  //   Director: "Nicolas Hulot, Jean-Albert Lièvre",
  //   Writer: "Nicolas Hulot, Mathilde Jounot, Antoine Le Bos",
  //   Actors: "Nicolas Hulot, J. Robert Oppenheimer, Pierre Rabhi",
  //   Plot: "N/A",
  //   Language: "French",
  //   Country: "France",
  //   Awards: "N/A",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BMjIzMDAzNDQzN15BMl5BanBnXkFtZTgwNzQwNjAzMTE@._V1_SX300.jpg",
  //   Ratings: [
  //     {
  //       Source: "Internet Movie Database",
  //       Value: "6.8/10",
  //     },
  //   ],
  //   Metascore: "N/A",
  //   imdbRating: "6.8",
  //   imdbVotes: "188",
  //   imdbID: "tt1503718",
  //   Type: "movie",
  //   DVD: "N/A",
  //   BoxOffice: "N/A",
  //   Production: "N/A",
  //   Website: "N/A",
  //   Response: "True",
  // };

  // console.log(movie);
  // Running Data

  const { id } = useParams();
    const [isLoading,SetIsLoading]= useState(true);
      const [movie ,SetMovie]=useState();
      console.log(movie)
  const getmovies = async(url)=>{
   try{
      const res=await fetch(url)
      const data = await res.json()
      console.log(data)
      if(data.Response === "True"){
          SetIsLoading(false);
          SetMovie(data);
      }

  }
   catch (e){
      console.log(e)
   }
  }

  useEffect(()=>{
      let timer = setTimeout(() => {
          getmovies(`${API_URL}&i=${id}`);
      }, 5000);
      return ()=> clearTimeout(timer)
  },[id])
  /////////////////////////////////////////////////
  return (
    <>
      <div>Our Single Movies ID is {id}</div>
      <section>
        <div className=" w-full h-fit py-5 bg-slate-800">
          <div className="w-9/12 mx-auto h-full flex ">
            <div className=" w-80 h-fit ">
              <img
                src={movie.Poster}
                alt={movie.imdbID}
                className=" w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className=" m-5 flex flex-col gap-3">
              <div className="title text-white font-medium text-2xl">
                {movie.Title}
              </div>
              <div className="rating text-white text-xl flex items-center gap-2">
                <IoStar />
                {movie.imdbRating}/{movie.imdbVotes}Votes
              </div>
              <div className="language">
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleMovie;
