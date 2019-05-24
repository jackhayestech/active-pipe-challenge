import React from 'react';
import PropTypes from 'prop-types';
import { propertyAddress } from '../../../../styles/properties.module.css';

const PropertyAddress = ({ street, suburb, state, postcode  }) => (
  <div className={propertyAddress}>
    <div>
      {street}
    </div>
    <div>
      {suburb}
    </div>
    <div>
      {state}
      &nbsp;
      {postcode}
    </div>
  </div>
);

PropertyAddress.propTypes = {
  street: PropTypes.string.isRequired,
  suburb: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
};

export default PropertyAddress;
