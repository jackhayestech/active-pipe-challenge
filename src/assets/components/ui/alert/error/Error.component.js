import React from 'react';
import PropTypes from 'prop-types';

import { faFrown, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { alertContent, errorContent } from '../../../../styles/ui.module.css'

const ErrorAlert = ({ toggleLoading, setAlert, load }) => (
  <div
    className={alertContent}
    onClick={() => {
      toggleLoading();
      setAlert();
      setTimeout(() => {
        load();
      }, 1000);
    }}
  >
    <div className={errorContent}>
      <FontAwesomeIcon icon={faFrown} />
      <span>
        &nbsp;Uh-oh... it looks like some things haven't loaded correctly.
      </span>
    </div>
    <div>
      <FontAwesomeIcon icon={faSyncAlt} />
    </div>
  </div>
);

ErrorAlert.propTypes = {
  toggleLoading: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
};

export default ErrorAlert;
