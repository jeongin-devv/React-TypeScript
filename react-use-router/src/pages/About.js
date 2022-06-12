import React from 'react'
import { useParams, useLocation } from 'react-router';
import queryString from 'query-string';

const About = () => {
  const {name} = useParams();
  const {search} = useLocation();
  const query = queryString.parse(search);
  return (
    <div>
      <h2>About { name }</h2>
      <h2>QueryString { query.id && query.id }</h2>
    </div>
  )
}

export default About;