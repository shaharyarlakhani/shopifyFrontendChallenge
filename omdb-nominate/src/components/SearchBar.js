import React from 'react'

function SearchBar() {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <input type='text' placeholder='Search for a Movie...' style=
                {{width: '500px', height: '25px'}} />
            <button>Search</button>
        </div>
    )
}

export default SearchBar
