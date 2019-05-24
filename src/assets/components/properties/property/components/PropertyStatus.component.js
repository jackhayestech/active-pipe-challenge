import React from 'react';
import PropTypes from 'prop-types';
import { propertyStatus, propertyStatusSpan } from '../../../../styles/properties.module.css';

const PropertyStatus = ({ status }) => (
  <div className={propertyStatus}>
    <span className={propertyStatusSpan}>
      {status}
    </span>
  </div>
);

PropertyStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default PropertyStatus;
