import React, { useContext, useEffect, useState } from "react";
import movieContext from '../context/Movies/MovieContext';

const Home = () => {
  const { movies, getMovies } = useContext(movieContext);

  useEffect(() => {
    let movies = getMovies();
    console.log(movies);
  }, []);
  return (
      <div className='homeContainer'>
          
      </div>
  );
}
export default Home;