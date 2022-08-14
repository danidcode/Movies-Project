import React, { useContext } from "react";
import movieContext from "../context/Movies/MovieContext";
const Pagination = ({ page, setPage }) => {
  const { setLoading } = useContext(movieContext);
  return (
    <div className="pagination" data-aos="fade-up" data-aos-duration="500">
      {/* for each number, we will set a new state to the pagination */}
      <a onClick={() => setPage(--page)}>&laquo;</a>
      <a className={`${page === 1 ? "active" : ""}`} 
      onClick={() => {
        page === 1 ? setPage(1) : setLoading(true);
        setPage(1);
      }}>
        1
      </a>
      <a
        className={`${page === 2 ? "active" : ""}`}
        onClick={() => {
          page === 2 ? setPage(2) : setLoading(true);
          setPage(2);
        }}
      >
        2
      </a>
      <a className={`${page === 3 ? "active" : ""}`} onClick={() => {
          page === 3 ? setPage(3) : setLoading(true);
          setPage(3);
        }}>
        3
      </a>
      <a className={`${page === 4 ? "active" : ""}`} onClick={() => {
          page === 4 ? setPage(4) : setLoading(true);
          setPage(4);
        }}>
        4
      </a>
      <a className={`${page === 5 ? "active" : ""}`} onClick={() => {
          page === 5 ? setPage(5) : setLoading(true);
          setPage(5);
        }}>
        5
      </a>
      <a className={`${page === 6 ? "active" : ""}`} onClick={() => {
          page === 6 ? setPage(6) : setLoading(true);
          setPage(6);
        }}>
        6
      </a>
      <a className={`${page === 7 ? "active" : ""}`} onClick={() => {
          page === 7 ? setPage(7) : setLoading(true);
          setPage(7);
        }}>
        7
      </a>
      <a className={`${page === 8 ? "active" : ""}`} onClick={() => {
          page === 8 ? setPage(8) : setLoading(true);
          setPage(8);
        }}>
        8
      </a>
      <a className={`${page === 9 ? "active" : ""}`} onClick={() => {
          page === 9 ? setPage(9) : setLoading(true);
          setPage(9);
        }}>
        9
      </a>
      <a
        className={`${page === 10 ? "active" : ""}`}
        onClick={() => {
          page === 10 ? setPage(10) : setLoading(true);
          setPage(10);
        }}
      >
        10
      </a>
      <a
        className={`${page === 11 ? "active" : ""}`}
        onClick={() => {
          page === 11 ? setPage(11) : setLoading(true);
          setPage(11);
        }}
      >
        11
      </a>
      <a
        className={`${page === 12 ? "active" : ""}`}
        onClick={() => {
          page === 12 ? setPage(12) : setLoading(true);
          setPage(12);
        }}
      >
        12
      </a>
      <a
        className={`${page === 13 ? "active" : ""}`}
        onClick={() => {
          page === 13 ? setPage(13) : setLoading(true);
          setPage(13);
        }}
      >
        13
      </a>
      <a
        className={`${page === 14 ? "active" : ""}`}
        onClick={() => {
          page === 14 ? setPage(14) : setLoading(true);
          setPage(14);
        }}
      >
        14
      </a>
      <a
        className={`${page === 15 ? "active" : ""}`}
        onClick={() => {
          page === 15 ? setPage(15) : setLoading(true);
          setPage(15);
        }}
      >
        15
      </a>
      <a
        className={`${page === 16 ? "active" : ""}`}
        onClick={() => {
          page === 16 ? setPage(16) : setLoading(true);
          setPage(16);
        }}
      >
        16
      </a>
      <a
        className={`${page === 17 ? "active" : ""}`}
        onClick={() => {
          page === 17 ? setPage(17) : setLoading(true);
          setPage(17);
        }}
      >
        17
      </a>
      <a
        className={`${page === 18 ? "active" : ""}`}
        onClick={() => {
          page === 18 ? setPage(18) : setLoading(true);
          setPage(18);
        }}
      >
        18
      </a>
      <a
        className={`${page === 19 ? "active" : ""}`}
        onClick={() => {
          page === 19 ? setPage(19) : setLoading(true);
          setPage(19);
        }}
      >
        19
      </a>
      <a
        className={`${page === 20 ? "active" : ""}`}
        onClick={() => {
          page === 20 ? setPage(20) : setLoading(true);
          setPage(20);
        }}
      >
        20
      </a>
      <a onClick={() => setPage(++page)}>&raquo;</a>
    </div>
  );
};

export default Pagination;
