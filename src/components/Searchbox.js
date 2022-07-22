import React from 'react'

function Searchbox(props) {
    const search=(event)=>{
        props.setSearchmovie(event.target.value)
    }
    return (
        <div className='col col-sm-4'>
            <input className='form-control' value={props.value} onChange={search} placeholder='Type to search...'/>
        </div>
    )
}

export default Searchbox