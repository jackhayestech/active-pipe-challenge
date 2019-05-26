import React from 'react';
import PropTypes from 'prop-types';
import { propertyPrice } from '../../../../../../../styles/application.module.css';

import { convertToPrice } from '../../../../../../../utilities/stringFuncs';

const PropertyPrice = ({ price }) => (
  <div className={propertyPrice}>
    $
    {convertToPrice(price)}
  </div>
);

PropertyPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

export default PropertyPrice;
