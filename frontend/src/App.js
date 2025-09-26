import React, { useEfecct } from 'react'
import './App.css';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY

function App() {
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
         `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
    };
    fetchMovies();
    }, []);

  return <h1>My Movie App</h1>
}

export default App;
