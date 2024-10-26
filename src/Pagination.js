import React from "react";
import "./Pagination.css";

function Pagination() {
  return (
    <div className="pagination">
      <button className="paginationButton">Previous</button>
      <div className="pageNumbers">
        1 <span className="inactivePages">2 3 4 5 6</span>
      </div>
      <button className="paginationButton">Next</button>
    </div>
  );
}

export default Pagination;
