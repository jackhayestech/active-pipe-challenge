import React from 'react';
import PropTypes from 'prop-types';
import { propertiesWrapper } from '../../../../styles/application.module.css';

import PropertyWrapper from './property/PropertyWrapper.component'

const PropertiesWrapper = ({ properties, filter }) => (
  <div className={propertiesWrapper}>
    {
      properties.map((property,i) => {
        if (filter === 'filter_status' || property.status === filter) {
          return (
            <PropertyWrapper
              key={i}
              property={property}
            />
          )
        }
        return null;
      })
    }
  </div>
);

PropertiesWrapper.defaultProps = {
  properties: null,
}

PropertiesWrapper.propTypes = {
  properties: PropTypes.array,
  filter: PropTypes.string.isRequired,
};

export default PropertiesWrapper;
