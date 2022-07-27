import React, { useContext, useEffect, useState } from "react";
import Pagination from "./Pagination";
import movieContext from "../context/Movies/MovieContext";
import Spinner from "react-bootstrap/Spinner";
import MovieCard from "./Movies/MovieCard";
const Home = () => {
  const { movies, getMovies, setPage, page } = useContext(movieContext);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getMovies().then( //Transaction of 0.5 seconds, just as decoration
      setTimeout(() => {
        setLoading(false);
      }, 500)
    );
  }, [page]);
  return (
    <>
      {isLoading ? (
        <Spinner animation="border" variant="secondary" />
      ) : (
        <div className="layout">
          <div className="homeContainer">
            {/* Conditional rendering because movies will be undefined until the request to the API ends */}
            {movies
              ? movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
              : null}
          </div>
          <Pagination page={page} setPage={setPage} />
        </div>
      )}
    </>
  );
};
export default Home;
