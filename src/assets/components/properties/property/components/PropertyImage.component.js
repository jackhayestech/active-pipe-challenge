import React from 'react';
import PropTypes from 'prop-types';
import { propertyImg, propertyImgContainer } from '../../../../styles/properties.module.css';

const PropertyImg = ({ imageSrc }) => (
  <div className={propertyImgContainer}>
    <img src={imageSrc} alt='property' className={propertyImg} />
  </div>
);

PropertyImg.propTypes = {
  imageSrc: PropTypes.number.isRequired,
};

export default PropertyImg;
