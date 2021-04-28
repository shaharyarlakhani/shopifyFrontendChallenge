import './App.css';
import './SearchBar.js';
import SearchBar from './SearchBar.js';
import ResultsList from './ResultsList';
import NominationsList from './NominationsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Pick your OMDB Nominations!
        </p>
      </header>
      <div className="Search-Bar">
        <SearchBar />
      </div>
      <div>
        <ResultsList />
        <NominationsList />
      </div>
    </div>
  );
}

export default App;
