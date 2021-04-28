import './App.css';
import './SearchBar.js';
import SearchBar from './SearchBar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Pick your OMDB Nominations!
        </p>
      </header>
      <SearchBar />
    </div>
  );
}

export default App;
