import React from 'react'
import './Card.css'

function Movielist(props) {

    return (
        <>
            {props.movies.map((movies,i,detailData)=>(
                <div key={i} className="card-container" style={{width: "18rem"}} >
                    <img src={movies.Poster} onClick={() => detailData.push(window.location.href = `viewdetails/${movies.imdbID}`)} className="card-img-top" alt='movie'/>
                </div>
            ))}
        </>
    )
}
export default Movielist