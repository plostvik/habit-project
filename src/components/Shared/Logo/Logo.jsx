import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.css';
import logo from '../../../images/logo.png';

const Logo = props => (
  <a href="null">
    <img src={logo} alt="logo" className={styles.logo} />
  </a>
);

Logo.propTypes = {
  // bla: PropTypes.string,
};

Logo.defaultProps = {
  // bla: 'test',
};

export default Logo;
