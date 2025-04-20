import react from 'react';
import { Link } from 'react-router-dom';

function MovieCard({movie}) {
  return (
    <div className="movie-card">
      <link to={`/movies/${movie.id}`}>{movie.title}</link>
      </div>
  );
}

export default MovieCard;