import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './MoviePage.module.css';
import MovieGrid from './MovieGrid/MovieGrid';
import SearchBar from './SearchBar/SearchBar';

export default class MoviePage extends Component {
  state = {
    movies: this.props.movies,
    inputValue: '',
  };

  static propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({
      inputValue: value,
      movies: !value ? this.props.movies : this.handleFilter(value),
    });
  };

  handleFilter = inputValue => {
    const { movies } = this.props;

    return movies.filter(movie =>
      movie.title.toLowerCase().includes(inputValue),
    );
  };

  render() {
    const { inputValue, movies } = this.state;

    return (
      <div className={styles.container}>
        <SearchBar value={inputValue} onChange={this.handleChange} />
        <MovieGrid movies={movies} />
      </div>
    );
  }
}
