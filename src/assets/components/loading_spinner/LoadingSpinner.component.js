import React from 'react';
import PropTypes from 'prop-types';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoadingSpinner = ({ display }) => {
  if (!display) {
    return null;
  }

  return (
    <FontAwesomeIcon
      icon={faSpinner}
      spin
    />
  )
}

LoadingSpinner.propTypes = {
  display: PropTypes.bool.isRequired,
};

export default LoadingSpinner;
