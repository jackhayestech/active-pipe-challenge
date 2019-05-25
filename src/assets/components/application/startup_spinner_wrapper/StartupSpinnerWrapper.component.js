import React from 'react';
import PropTypes from 'prop-types';
import { startupSpinnerWrapper } from '../../styles/layout.module.css'

import SpinnerWrapper from '../../common/loading_spinner/LoadingSpinner.component';

const LoadingSpinner = ({ display }) => {
  if (!display) {
    return null;
  }

  return (
    <div className={startupSpinnerWrapper}>
      <SpinnerWrapper />
    </div>
  );
}

LoadingSpinner.propTypes = {
  display: PropTypes.bool.isRequired,
};

export default LoadingSpinner;
