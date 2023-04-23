import React from "react";
import "../Styles/Card.css";

function Movielist(props) {
  return (
    <>
      {props.movies.map((movies, i, detailData) => (
          <div key={i} class="movie">
            <div class="cover">
              <img
                src={movies.Poster}
                alt="imgerr"
                onClick={() =>
                  detailData.push(
                    (window.location.href = `viewdetails/${movies.imdbID}`)
                  )
                }
              />
            </div>
            <div class="description">
              <p class="title">
                {movies.Title}
                <br />
                <span class="author">year: {movies.Year}</span>
              </p>
            </div>
          </div>
      ))}
    </>
  );
}
export default Movielist;
