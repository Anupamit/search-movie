import React, { useEffect, useState } from 'react'
import Movieheading from './Movieheading'
import Movielist from './Movielist'
import Searchbox from './Searchbox'
import './Movieapi.css';

function Movieapi() {
    const [movies, setMovies] = useState([])
    const [searchmovie, setSearchmovie] = useState('')

    const fetchMovieData = async (searchmovie) => {
        let url= `https://www.omdbapi.com/?s=${searchmovie}&apikey=hhhhd`;
        let response=await fetch(url);
        let responseJson= await response.json();
        if (responseJson.Search) {
            setMovies(responseJson.Search)
        }
        console.log(responseJson)
    }

    useEffect(()=>{
        fetchMovieData(searchmovie)
    }, [searchmovie])

    return (
        <div className='container-fluid movie-app'>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Movieheading className="navbar-brand" heading="Search Movies"/>
                    <Searchbox className="form-control me-2" searchmovie={searchmovie} setSearchmovie={setSearchmovie}/>
                </div>
            </nav>
            <div className='row'>
                <Movielist movies={movies}/>
            </div>
        </div>
    )
}

export default Movieapi