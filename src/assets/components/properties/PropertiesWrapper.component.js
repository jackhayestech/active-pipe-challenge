import React from 'react';
import PropTypes from 'prop-types';
import { propertiesWrapper } from '../../styles/properties.module.css';

import PropertyWrapper from './property/PropertyWrapper.component'

const PropertiesWrapper = ({ properties }) => {
  // Properties havn't been retrieved from the api yet
  if (!properties) {
    return null;
  }

  // Properties have been retrieved but none were found
  if (properties.length === 0) {
    return (
      <div className={propertiesWrapper}>
        No properties found.
      </div>
    )
  }

  return (
    <div className={propertiesWrapper}>
      {
        properties.map(property => (
          <PropertyWrapper
            property={property}
          />
        ))
      }
    </div>
  );
}

PropertiesWrapper.defaultProps = {
  properties: null,
}

PropertiesWrapper.propTypes = {
  properties: PropTypes.array,
};

export default PropertiesWrapper;
