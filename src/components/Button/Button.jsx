import React from 'react';
import PropTypes from 'prop-types';
import s from '../Button/Button.module.css';

const Button = ({ btnNextPage }) => {
  return (
    <button className={s.button} type="button" onClick={btnNextPage}>
      Load more
    </button>
  );
};

Button.propTypes = {
  btnNextPage: PropTypes.func.isRequired,
};

export default Button;
