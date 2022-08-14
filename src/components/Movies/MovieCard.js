import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import {AiOutlineEye} from 'react-icons/ai';
import movieContext from "../../context/Movies/MovieContext";
import { SET_LOADING } from "../../context/Types";
const IMG_API = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({id,title, poster_path, release_date, popularity}) => { 
  const {  setLoading} = useContext(movieContext);
  return (
    
      <div className='cards' data-aos="fade-up"
      data-aos-duration="500">
        <div className="card-content">
  
  <div className="movie">
    <a href="#" className="movie_card-link"></a>
    <img src={IMG_API+poster_path} alt="" className="movie_image"/>
    <div className="movie_text-content">
      <h2 className="movie_title">{title}</h2>
      <div className="movie_post"><div className="movie_post_date">{release_date}</div> <div className="movie_post_popularity"> Popularity: <span className="movie_post_popularity_span">
        {parseInt(popularity)}</span>
      </div></div>
      
      <div className="movie_details-content">
        {/* Passing the id to the next screen */}
      <Link to={`details/${id}`} onClick={()=>setLoading(true)} > View <AiOutlineEye size={25}/> </Link> 
      </div>
    </div>
  </div>

</div>
      </div>
  );
}
export default MovieCard;