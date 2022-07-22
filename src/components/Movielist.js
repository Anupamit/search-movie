import React from 'react'
import './Card.css'

function Movielist(props) {
    return (
        <>
            {props.movies.map((movies,i)=>(
                <div key={i} className="card-container" style={{width: "18rem"}} >
                    <img src={movies.Poster} className="card-img-top" alt='movie'/>
                    <div>
                        <h4 >{movies.Title}</h4>
                        <p >Year : {movies.Year}</p>
                        <p >Type : {movies.Type}</p>
                    </div>
                </div>
            ))}
        </>
    )
}
export default Movielist