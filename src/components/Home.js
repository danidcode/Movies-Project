import React, { useContext, useEffect, useState } from "react";
import movieContext from '../context/Movies/MovieContext';
import MovieCard from './Movies/MovieCard';
const Home = () => {
  const { movies, getMovies } = useContext(movieContext);

  useEffect(() => {
    let movies = getMovies();
  }, []);
  return (
      <div className='homeContainer'>
          {movies.map((movie) => <MovieCard key={movie.id} {...movie}/>)}

      </div>
  );
}
export default Home;