import { useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';

const API_URL = "https://www.omdbapi.com?apikey=37c5f80";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    //for checking the value in movie api in the console
    useEffect(() => {
        searchMovies("Spiderman");
    }, []);
    //

  return (
    <div className="app">
      <h1>MovieWeeb</h1>
      <div className="search">
        <input 
            placeholder="Search for a movie..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        <img
            src={SearchIcon}
            alt="Search"
            onClick={() => searchMovies(searchTerm)}
            />
      </div>
      {
        movies?.length > 0 
        ? (
            <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
            </div>
        ) :
        (
            <div className="empty">
                <h2>No Movies Found</h2>
            </div>
        )
      }
      
    </div>
  );
}

export default App;