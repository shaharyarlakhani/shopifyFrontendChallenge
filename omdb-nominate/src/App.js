import React from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ListBoxes from  './components/ListBoxes'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <div>
            <Header />
            <SearchBar />
            <ListBoxes />
        </div>
    )
}

export default App
