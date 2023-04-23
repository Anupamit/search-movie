import React, { useEffect, useState } from "react";
import {useParams,useNavigate } from "react-router-dom";
import "../Styles/Viewdetails.css";

function Moviedetails() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      let url = `https://www.omdbapi.com/?i=${id}&apikey=1ecb7ecf`;
      let response = await fetch(url);
      let responseJson = await response.json();
      setMovies(responseJson);
      console.log(responseJson);
    };
    fetchMovieDetails();
  }, [id]);
  return (
    <div>
      <div  style={{border:"none"}}>
      <button style={{width:"0px",height:"0px",margin:"25px"}} onClick={handleGoBack}><img style={{width:"30px",height:"30px",marginLeft:"25px"}} src="https://cdn.icon-icons.com/icons2/362/PNG/512/Go-back_36760.png" alt="back"/></button>
      </div>
      <div className="view-card-wrap">
        <div>
          <img src={movies.Poster} alt="movie" />
        </div>
        <div className="movie-details">
          <p>Title : {movies.Title}</p>
          <p>Year : {movies.Year}</p>
          <p>Type : {movies.Type}</p>
          <p>Genre : {movies.Genre}</p>
          <p>Actors : {movies.Actors}</p>
          <p>Awards : {movies.Awards}</p>
          <p>Director : {movies.Director}</p>
          <p>Runtime : {movies.Runtime}</p>
          <p>Writer : {movies.Writer}</p>
          <p>imdbRating : {movies.imdbRating}</p>
          <p>Released : {movies.Released}</p>
          <p>Production : {movies.Production}</p>
          <p>Plot : {movies.Plot}</p>
        </div>
      </div>
    </div>
  );
}

export default Moviedetails;
