import React from "react";

const Pagination = ({ page, setPage }) => {
  return (
    <div className="pagination">
     {/* for each number, we will set a new state to the pagination */}
      <a onClick={() => setPage(--page)}>&laquo;</a> 
      <a className={`${page === 1 ? "active" : ""}`} onClick={() => setPage(1)}>
        1
      </a>
      <a className={`${page === 2 ? "active" : ""}`} onClick={() => setPage(2)}>
        2
      </a>
      <a className={`${page === 3 ? "active" : ""}`} onClick={() => setPage(3)}>
        3
      </a>
      <a className={`${page === 4 ? "active" : ""}`} onClick={() => setPage(4)}>
        4
      </a>
      <a className={`${page === 5 ? "active" : ""}`} onClick={() => setPage(5)}>
        5
      </a>
      <a className={`${page === 6 ? "active" : ""}`} onClick={() => setPage(6)}>
        6
      </a>
      <a className={`${page === 7 ? "active" : ""}`} onClick={() => setPage(7)}>
        7
      </a>
      <a className={`${page === 8 ? "active" : ""}`} onClick={() => setPage(8)}>
        8
      </a>
      <a className={`${page === 9 ? "active" : ""}`} onClick={() => setPage(9)}>
        9
      </a>
      <a
        className={`${page === 10 ? "active" : ""}`}
        onClick={() => setPage(10)}
      >
        10
      </a>
      <a
        className={`${page === 11 ? "active" : ""}`}
        onClick={() => setPage(11)}
      >
        11
      </a>
      <a
        className={`${page === 12 ? "active" : ""}`}
        onClick={() => setPage(12)}
      >
        12
      </a>
      <a
        className={`${page === 13 ? "active" : ""}`}
        onClick={() => setPage(13)}
      >
        13
      </a>
      <a
        className={`${page === 14 ? "active" : ""}`}
        onClick={() => setPage(14)}
      >
        14
      </a>
      <a
        className={`${page === 15 ? "active" : ""}`}
        onClick={() => setPage(15)}
      >
        15
      </a>
      <a
        className={`${page === 16 ? "active" : ""}`}
        onClick={() => setPage(16)}
      >
        16
      </a>
      <a
        className={`${page === 17 ? "active" : ""}`}
        onClick={() => setPage(17)}
      >
        17
      </a>
      <a
        className={`${page === 18 ? "active" : ""}`}
        onClick={() => setPage(18)}
      >
        18
      </a>
      <a
        className={`${page === 19 ? "active" : ""}`}
        onClick={() => setPage(19)}
      >
        19
      </a>
      <a
        className={`${page === 20 ? "active" : ""}`}
        onClick={() => setPage(20)}
      >
        20
      </a>
      <a onClick={() => setPage(++page)}>&raquo;</a>
    </div>
  );
};

export default Pagination;