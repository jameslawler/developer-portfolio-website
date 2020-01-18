import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  color,
  title,
  description,
  githubUrl,
  githubStars,
  githubForks,
}) => (
  <div style={{ backgroundColor: color }}>
    <h1>{title}</h1>
    <h2>{description}</h2>
    <a href={githubUrl}>GitHub</a>
    <p>Stars: {githubStars}</p>
    <p>Forks: {githubForks}</p>
  </div>
);

Header.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
  githubStars: PropTypes.number,
  githubForks: PropTypes.number,
};

export default Header;
