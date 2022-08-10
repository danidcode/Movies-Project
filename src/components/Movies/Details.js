import React, { useContext, useEffect, useState } from "react";
import movieContext from "../../context/Movies/MovieContext";
import { useParams } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
const IMG_API = "https://image.tmdb.org/t/p/w500";

const Details = () => {
  const { getOneMovie, selectedMovie } = useContext(movieContext);
  const [isLoading, setLoading] = useState(true);
  //Getting the id from the url
  const { id } = useParams();
  useEffect(() => {
    //While getOneMovie is retrieving the data from the API, The page will be loading
    getOneMovie(id).then(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Conditional rendering because selectedMovie will be undefined until the request to the API ends */}
      {isLoading ? (
        <MoonLoader
        color="rgb(231, 231, 231)"
        size={35}
      />
      ) : (
        <>
          <div
            className="detailsContainer"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
          >
            {" "}
            <div className="details-movie_image_div">
              <img
                src={IMG_API + selectedMovie.poster_path}
                alt=""
                className="details-movie_image"
              />
            </div>
            <div className="details">
              {" "}
              <div className="details-title">
                {" "}
                <span className="details-title_span">
                  {selectedMovie.title.toUpperCase()}
                </span>{" "}
              </div>
              <div className="details-genders">
                {" "}
                {selectedMovie.genres.map((gen) => {
                  return (
                    <div className="details-genders_cards"> {gen.name} </div>
                  );
                })}{" "}
              </div>
              <div className="details-overview">
                <span className="details-overview_span">
                  {selectedMovie.overview}
                </span>
              </div>
              <div className="details-popularity-date">
                <span className="details-popularity_span">
                  Popularity: {parseInt(selectedMovie.popularity)}
                </span>
                <span className="details-date_span">
                  {selectedMovie.release_date}
                </span>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
};
export default Details;
