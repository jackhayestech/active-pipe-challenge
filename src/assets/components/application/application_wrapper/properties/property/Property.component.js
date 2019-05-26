import React from 'react';
import PropTypes from 'prop-types';
import { property, propertyHead } from '../../../../../styles/application.module.css';
import PropertyPrice from './components/property_price/PropertyPrice.component';
import PropertyStatus from './components/PropertyStatus.component';
import PropertyImage from './components/property_image/PropertyImage.component';
import PropertyAddress from './components/property_address/PropertyAddress.component';

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
      <PropertyImage imageSrc={image}/>
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
