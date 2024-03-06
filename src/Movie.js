import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";

const Movie = () => {
  const { movie } = useGlobalContext();
  return (
    <section className="movies-page">
      <div className="grid grid-cols-4 w-11/12 mx-auto">
        {movie.map((currmovies) => {
          const { imdbID, Title, Poster } = currmovies;
          return (
            <NavLink to={`movie/${imdbID}/${Title}`} key={imdbID} className=" w-80 h-[450px]  my-3">
              <div className="card w-full h-full ">
                <div className="card-img w-full h-full">
                  <img
                    src={Poster}
                    alt={imdbID}
                    className=" rounded-lg w-full h-full object-cover"
                  />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movie;
