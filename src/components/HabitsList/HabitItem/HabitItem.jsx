import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const HabitItem = ({ title, progress }) => (
  <li>
    <h3>{title}</h3>
    <div>{progress} %</div>
  </li>
);

// HabitItem.propTypes = {
//   // bla: PropTypes.string,
// };

// HabitItem.defaultProps = {
//   // bla: 'test',
// };

export default HabitItem;
