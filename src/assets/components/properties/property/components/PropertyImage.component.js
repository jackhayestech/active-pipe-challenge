import React from 'react';
import PropTypes from 'prop-types';
import { propertyImg } from '../../../../styles/properties.module.css';

const PropertyImg = ({ img }) => (
  <img src='img' alt='property' className={propertyImg} />
);

PropertyImg.propTypes = {
  price: PropTypes.number.isRequired,
};

export default PropertyImg;
