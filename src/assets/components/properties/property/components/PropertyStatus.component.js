import React from 'react';
import PropTypes from 'prop-types';
import { propertyStatus } from '../../../../styles/properties.module.css';

const PropertyStatus = ({ status }) => (
  <span className={propertyStatus}>
    {status}
  </span>
);

PropertyStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default PropertyStatus;
