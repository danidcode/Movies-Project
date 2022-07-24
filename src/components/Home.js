import React, { useContext, useEffect, useState } from "react";
import movieContext from '../context/Movies/MovieContext';
import MovieCard from './Movies/MovieCard';
const Home = () => {
const { movies, getMovies } = useContext(movieContext);

  useEffect(() => {
     getMovies();
  }, []);
  return (
    
      <div className='homeContainer'>
        {/* Conditional rendering because movies will be undefined until the request to the API ends */}
        {movies ? movies.map((movie) => <MovieCard key={movie.id} {...movie}/>) : null}
      </div>
  );
}
export default Home;