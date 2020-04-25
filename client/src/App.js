import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import {  Route } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        {/* <Link to="/MovieList">Movie List</Link> */}
        <Route exact path='/'/>
          <MovieList movies={movieList} />
        <Route path="/Movies/:id" component={Movie}  />
      </div>
    </div>
  );
};

export default App;
