import React from 'react';
import PropTypes from 'prop-types';
import { alert } from '../../../styles/ui.module.css'

const returnAlertType = (type) => {
  switch (type) {
    case 'error':
      return "error"
    default:
      return null;
  };
};

const Alert = ({ display, type }) => {
  if (!display) {
    return null;
  }

  return (
    <div className={alert}>
      { returnAlertType(type) }
    </div>
  );
};

Alert.defaultProps = {
  type: null,
}

Alert.propTypes = {
  display: PropTypes.bool.isRequired,
  type: PropTypes.string
};

export default Alert;
