import { useState } from 'react';
import MovieList from './components/MovieList';
import { movies as movieData } from './movies';

function App() {
  const [movies, setMovies] = useState(movieData);

  const onMovieDelete = (id) => {
    setMovies(state => state.filter(x => x.id !== id))
  }

  return (
    <div>
      <h1>Movie Collection</h1>

      <MovieList movies={movies} onMovieDelete={onMovieDelete} />
    </div>
  );
}

export default App;
