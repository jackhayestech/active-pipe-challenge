import React from 'react';
import PropTypes from 'prop-types';
import { alert, error } from '../../../styles/ui.module.css'

import Error from './error/Error.connector'

const returnAlertType = (type) => {
  switch (type) {
    case 'error':
      return <Error />
    default:
      return '';
  };
};

const Alert = ({ display, type }) => {
  if (!display) {
    return null;
  }

  return (
    <div className={`${alert} ${error}`}>
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
