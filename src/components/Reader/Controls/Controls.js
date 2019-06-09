import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ prev, next, index }) => {
  let stopPrevios = false;
  let stopNext = false;
  if (index === 1) {
    stopPrevios = true;
  } else if (index === 12) {
    stopNext = true;
  }

  return (
    <section className={styles.controls}>
      <button
        className={styles.button}
        type="button"
        onClick={prev}
        disabled={stopPrevios}
      >
        Назад
      </button>
      <button
        className={styles.button}
        type="button"
        onClick={next}
        disabled={stopNext}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Controls;
