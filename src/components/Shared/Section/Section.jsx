import React from 'react';
import PropTypes, { string } from 'prop-types';
import './Section.module.css';

const Section = ({ children, sectionClass }) => (
  <div className={sectionClass}>{children}</div>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  sectionClass: PropTypes.string,
};

Section.defaultProps = {
  sectionClass: 'section',
};

export default Section;
