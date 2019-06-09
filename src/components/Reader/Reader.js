import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

import styles from './Reader.module.css';

export default class Reader extends Component {
  state = {
    index: 1,
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  previosArticle = () => {
    this.setState(prevState => ({
      index: prevState.index - 1,
    }));
  };

  nextArticle = () => {
    this.setState(prevState => ({
      index: prevState.index + 1,
    }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;

    return (
      <div className={styles.reader}>
        <Publication item={items[index - 1]} />
        <Counter index={index} length={items.length} />
        <Controls
          prev={this.previosArticle}
          next={this.nextArticle}
          index={index}
        />
      </div>
    );
  }
}
