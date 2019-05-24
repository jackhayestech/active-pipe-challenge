import React from 'react';
import PropTypes from 'prop-types';
import { propertyComponent} from '../../../styles/properties.module.css';

const Property = ({ property }) => {
  const {
    status,
    street,
    suburb,
    state,
    postcode,
    price,
    image,
  } = property;

  return (
    <div className={propertyComponent}>
      
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
