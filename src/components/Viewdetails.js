import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Viewdetails.css'

function Moviedetails(){
    const [movies, setMovies] = useState([])

    const {id} = useParams()
    console.log(id,'params');

    useEffect(()=>{
        const fetchMovieDetails= async () => {
            let url= `https://www.omdbapi.com/?i=${id}&apikey=hhf`;
            let response=await fetch(url);
            let responseJson= await response.json();
            setMovies(responseJson)
            console.log(responseJson)
        }
        fetchMovieDetails()
    },[id])
    return(
        <div className="view-card-wrap" >
            <div>
                <img src={movies.Poster} alt='movie'/>
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
    )
}

export default Moviedetails