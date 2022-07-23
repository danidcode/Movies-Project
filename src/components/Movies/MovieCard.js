import React from 'react';
const IMG_API = "https://image.tmdb.org/t/p/w500";
const MovieCard = ({title, poster_path, release_date, popularity}) => {
  return (
      <div className='cards'>
        <div className="card-content">
  
  <div className="movie">
    <a href="#" className="movie_card-link"></a>
    <img src={IMG_API+poster_path} alt="" className="movie_image"/>
    <div className="movie_text-content">
      <h2 className="movie_title">Amazing First Title</h2>
      <div className="movie_post-date">Jan 29, 2018</div>
      <div className="movie_details-content">
        <p className="movie_excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;</p>
        <a href="#" className="movie_read-more">Read more</a>
      </div>
    </div>
  </div>

</div>
      </div>
  );
}
export default MovieCard;