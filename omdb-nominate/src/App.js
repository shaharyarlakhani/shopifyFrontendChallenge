import React from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import MovieTables from  './components/MovieTables'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div>
            <Header />
            <SearchBar />
            <MovieTables />
        </div>
    )
}

export default App
