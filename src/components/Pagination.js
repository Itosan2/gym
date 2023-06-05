import React, { useState } from "react";
import "../css/Pagination.css";
import { useScrollTrigger } from "@mui/material";

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
  const totalPage = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination-container">
      {/* <h5>{`Page ${currentPage} / ${totalPage}`}</h5> */}
      <div
        className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={() => paginate(currentPage - 1)}
      >
        &larr;
      </div>
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              className={`pagination-item ${
                currentPage === number ? "active" : ""
              }`}
              onClick={() => paginate(number)}
            >
              <a className="pagination-link">{number}</a>
            </li>
          );
        })}
      </ul>
      <div
        className={`pagination-item ${
          currentPage === totalPage ? "disabled" : ""
        }`}
        onClick={() => paginate(currentPage + 1)}
      >
        &rarr;
      </div>
    </nav>
  );
};

export default Pagination;
