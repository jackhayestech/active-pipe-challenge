import React from 'react';
import PropTypes from 'prop-types';
import { propertyWrapper, propertyPadding } from '../../../styles/properties.module.css';

const PropertyWrapper = ({ property }) => (
  <div className={propertyWrapper}>
    <div className={propertyPadding}>
      Property
    </div>
  </div>
);

PropertyWrapper.propTypes = {
  property: PropTypes.object.isRequired,
};

export default PropertyWrapper;
