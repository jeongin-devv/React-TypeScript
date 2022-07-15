import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Subset } from '../Models/MoviesModel';

const Detail = () => {
  const { id } = useParams();

  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json : Subset<any> = await response.json();
    const { movie } = await json.data;
    console.log(json);
    console.log(movie);
  };

  useEffect(() => {
    getMovie();
  });
  return <h1>id: {id}</h1>;
};

export default Detail;
