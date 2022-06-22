import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../Models/MoviesModel';
import styles from './Movie.module.css';

const MovieDiv = ({ movies } : { movies : Movie[] }) => {
  const movieList = movies;
  return (
    <div className={styles.movies}>
      {movieList.map((movie) => (
        <div className={styles.movie} key={movie.id}>
          <img className={styles.movie__img} src={movie.medium_cover_image!} alt={movie.title} />
          <h2 className={styles.movie__title}>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </h2>
          <h3 className={styles.movie__year}>{movie.year}</h3>
          <p>{movie.summary.length > 235 ? `${movie.summary.slice(0, 235)}...` : movie.summary}</p>
          <ul className={styles.movie__genres}>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MovieDiv;
