import React, { useContext, useEffect, useState } from "react";
import Pagination from "./Pagination";
import movieContext from "../context/Movies/MovieContext";
import Spinner from "react-bootstrap/Spinner";
import MovieCard from "./Movies/MovieCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {


  const { movies, getMovies, setPage, page } = useContext(movieContext);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setLoading(true);

    const showMovies = async () => {
      await getMovies();
      setLoading(false);
    };

    showMovies();
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
              ? [
                  movies.map((movie) => (
                    <MovieCard key={movie.id} {...movie} />
                  )),
                  <Pagination page={page} setPage={setPage} />,
                ] //Using an array to return the components because conditional rendering just allows return 1 component
              : null}
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
