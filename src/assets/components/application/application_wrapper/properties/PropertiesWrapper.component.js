import React from 'react';
import PropTypes from 'prop-types';
import { propertiesWrapper } from '../../../../styles/application.module.css';

import PropertyWrapper from './property/PropertyWrapper.component'

const PropertiesWrapper = ({ properties, filter }) => (
  <div className={propertiesWrapper}>
    {
      properties.map(property => {
        if (filter === 'filter_status' || property.status === filter) {
          return (
            <PropertyWrapper
              property={property}
            />
          )
        }
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
