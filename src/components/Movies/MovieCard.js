import React from 'react';
import { Link } from 'react-router-dom';
const IMG_API = "https://image.tmdb.org/t/p/w500";
const MovieCard = ({title, poster_path, release_date, popularity}) => {
  return (
    
      <div className='cards'>
        <div className="card-content">
  
  <div className="movie">
    <a href="#" className="movie_card-link"></a>
    <img src={IMG_API+poster_path} alt="" className="movie_image"/>
    <div className="movie_text-content">
      <h2 className="movie_title">{title}</h2>
      <div className="movie_post-date">{release_date}</div>
      <div className="movie_details-content">
      <Link to="/"> View more </Link>
      </div>
    </div>
  </div>

</div>
      </div>
  );
}
export default MovieCard;