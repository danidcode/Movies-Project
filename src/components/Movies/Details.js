import React, { useContext, useEffect, useState } from "react";
import movieContext from '../../context/Movies/MovieContext';
import {useParams} from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
const IMG_API = "https://image.tmdb.org/t/p/w500";


const Details = () => {

  const { getOneMovie, selectedMovie } = useContext(movieContext);
  const [isLoading, setLoading] = useState(true);

  //Getting the id from the url
  const { id } = useParams();
  useEffect(() => {
    //While getOneMovie is retrieving the data from the API, The page will be loading
    getOneMovie(id).then(() => setLoading(false));
  }, [])
  
  return (
    
      <div className='detailsContainer'>
        
         {/* Conditional rendering because selectedMovie will be undefined until the request to the API ends */}
       {isLoading ? <Spinner animation="border" variant="secondary" /> :    
       
       <div className="details-movie_image_div">
       <img src={IMG_API+selectedMovie.poster_path} alt="" className="details-movie_image"/>
       </div>
       
       }
      </div>
  );
}
export default Details;