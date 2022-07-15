import React, { useState, useEffect } from 'react';
import { Movie, Subset } from '../Models/MoviesModel';
import MovieDiv from '../Components/Movie';
import styles from './Home.module.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movieList, setMoviesList] = useState<Movie[]>([]);
  const getMovies = async () => {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year');
    const json : Subset<any> = await response.json();
    const { movies } : { movies : Movie[] } = await json.data;
    setMoviesList(movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading
        ? <h1>Loading...</h1>
        : <MovieDiv movies={movieList} />}
    </div>
  );
};

export default Home;
