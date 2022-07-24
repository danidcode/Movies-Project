import React, { useContext, useEffect, useState } from "react";
import movieContext from '../../context/Movies/MovieContext';
import {useParams} from "react-router-dom";
const IMG_API = "https://image.tmdb.org/t/p/w500";

const Details = () => {
  const { getOneMovie, selectedMovie } = useContext(movieContext);
  //Getting the id from the url
  const { id } = useParams();
  useEffect(() => {
    getOneMovie(id)
  }, [])
  
  return (
      <div className='detailsContainer'>
         {/* Conditional rendering because selectedMovie will be undefined until the request to the API ends */}
        {selectedMovie ?  <img src={IMG_API+selectedMovie.poster_path} alt="" className="movie_image"/>
       : null }
       
      </div>
  );
}
export default Details;