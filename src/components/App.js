import React, { Component } from 'react';
import publications from '../data/publications.json';
import Reader from './Reader/Reader';
import MoviePage from './MoviePage/MoviePage';
import Dashboard from './Dashboard/Dashboard';

import movies from '../data/movies.json';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Reader items={publications} />
        <MoviePage movies={movies} />
        <Dashboard />
      </div>
    );
  }
}
