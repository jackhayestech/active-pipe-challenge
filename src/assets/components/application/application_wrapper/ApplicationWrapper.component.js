import React from 'react';
import PropTypes from 'prop-types';
import { applicationWrapper } from '../../../styles/application.module.css';

import Header from './header/Header.component';
import PropertiesWrapper from './properties/PropertiesWrapper.connector'

const ApplicationWrapper = ({ properties }) => {
  // Properties havn't been retrieved from the api yet
  if (!properties) {
    return null;
  }

  // Properties have been retrieved but none were found
  if (properties.length === 0) {
    return (
      <div className={applicationWrapper}>
        No properties found.
      </div>
    )
  }

  return (
    <div className={applicationWrapper}>
      <Header />
      <PropertiesWrapper />
    </div>
  );
}

ApplicationWrapper.defaultProps = {
  properties: null,
}

ApplicationWrapper.propTypes = {
  properties: PropTypes.array,
};

export default ApplicationWrapper;
