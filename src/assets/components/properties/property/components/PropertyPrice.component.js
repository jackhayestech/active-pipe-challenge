import React from 'react';
import PropTypes from 'prop-types';
import { propertyPrice } from '../../../../styles/properties.module.css';

const PropertyPrice = ({ price }) => (
  <div className={propertyPrice}>
    {price}
  </div>
);

PropertyPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

export default PropertyPrice;
