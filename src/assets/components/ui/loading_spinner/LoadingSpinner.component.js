import React from 'react';
import { spinner } from '../../../styles/ui.module.css'

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoadingSpinner = () => (
  <FontAwesomeIcon
    className={spinner}
    icon={faSpinner}
    spin
  />
);

export default LoadingSpinner;
