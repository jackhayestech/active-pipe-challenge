import React from 'react';
import PropTypes from 'prop-types';
import { statusIndicator, green, orange, red } from '../../../../../../../styles/application.module.css';

const PropertyStatus = ({ status }) => {
  switch (status) {
    case 'current':
      return (<span className={`${statusIndicator} ${green}`} />)
    case 'off_market':
          return (<span className={`${statusIndicator} ${orange}`} />)
    case 'sold':
      return (<span className={`${statusIndicator} ${red}`} />)
    default:
      return null;
  }
};

PropertyStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default PropertyStatus;
