import React from 'react';
import PropTypes from 'prop-types';

//Component for an individual image. Used by the PhotoContainer component.

const Photo = ({ url }) => {
  return (
    <li>
      <img src={url} alt="" />
    </li>
  );
};

Photo.propTypes = {
  url: PropTypes.string
};

export default Photo;