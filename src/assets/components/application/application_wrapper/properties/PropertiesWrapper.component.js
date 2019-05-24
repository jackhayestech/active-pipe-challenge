import React from 'react';
import PropTypes from 'prop-types';
import { propertiesWrapper } from '../../../../styles/application.module.css';

import PropertyWrapper from './property/PropertyWrapper.component'

const PropertiesWrapper = ({ properties }) => (
  <div className={propertiesWrapper}>
    {
      properties.map(i => (
        <PropertyWrapper
          property={i}
        />
      ))
    }
  </div>
);

PropertiesWrapper.defaultProps = {
  properties: null,
}

PropertiesWrapper.propTypes = {
  properties: PropTypes.array,
};

export default PropertiesWrapper;
