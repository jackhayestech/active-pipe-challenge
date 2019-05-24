import React from 'react';
import PropTypes from 'prop-types';
import { property, propertyHead } from '../../../styles/properties.module.css';
import PropertyPrice from './components/PropertyPrice.component';
import PropertyStatus from './components/PropertyStatus.component';
import PropertyImage from './components/PropertyImage.component';
import PropertyAddress from './components/PropertyAddress.component';

const Property = (props) => {
  const {
    status,
    street,
    suburb,
    state,
    postcode,
    price,
    image,
  } = props;

  return (
    <div className={property}>
      <div className={propertyHead}>
        <PropertyPrice price={price} />
        <PropertyStatus status={status} />
      </div>
      <PropertyImage image={image}/>
      <PropertyAddress
        street={street}
        suburb={suburb}
        state={state}
        postcode={postcode}
      />
    </div>
  );
};

Property.propTypes = {
  status: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  suburb: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Property;
