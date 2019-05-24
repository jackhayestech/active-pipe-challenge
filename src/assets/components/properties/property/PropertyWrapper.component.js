import React from 'react';
import PropTypes from 'prop-types';
import { propertyWrapper, propertyPadding } from '../../../styles/properties.module.css';

import Property from './Property.component';

const PropertyWrapper = ({ property }) => (
  <div className={propertyWrapper}>
    <div className={propertyPadding}>
      <Property
        status={property.status}
        street={property.street}
        suburb={property.suburb}
        state={property.state}
        postcode={property.postcode}
        price={property.price}
        image={property.image}
      />
    </div>
  </div>
);

PropertyWrapper.propTypes = {
  property: PropTypes.object.isRequired,
};

export default PropertyWrapper;
