import React, { useContext, useEffect, useState } from "react";
import Pagination from "./Pagination";
import movieContext from "../context/Movies/MovieContext";
import MovieCard from "./Movies/MovieCard";
import MoonLoader from "react-spinners/MoonLoader";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const { movies, getMovies, setPage, page, setLoading, isLoading } =
    useContext(movieContext);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    const showMovies = async () => {
      await getMovies();
      setLoading(false);
    };
    showMovies();
  }, [page]);
  console.log(isLoading);
  return (
    <>
      {isLoading ? (
        <MoonLoader color="rgb(231, 231, 231)" size={35} />
      ) : (
        <div className="layout">
          <div className="homeContainer">
            {/* Conditional rendering because movies will be undefined until the request to the API ends */}
            {movies
              ? [
                  movies.map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                  )),
                  <Pagination page={page} setPage={setPage} />,
                ] //Using an array to return the components because conditional rendering just allows return 1 component
              : null}
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
