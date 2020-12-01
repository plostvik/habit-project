import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.css';
import logo from '../../../images/logo.png';
import { NavLink } from 'react-router-dom';

const Logo = props => (
  <NavLink to="/">
    <img src={logo} alt="logo" className={styles.logo} />
  </NavLink>
);

Logo.propTypes = {
  // bla: PropTypes.string,
};

Logo.defaultProps = {
  // bla: 'test',
};

export default Logo;
