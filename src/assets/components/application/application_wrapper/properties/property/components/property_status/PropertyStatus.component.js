import React from 'react';
import PropTypes from 'prop-types';
import { propertyStatus, propertyStatusSpan } from '../../../../../../../styles/application.module.css';
import StatusIndicator from './status_indicator/StatusIndicator.component';

const PropertyStatus = ({ status }) => (
  <div className={propertyStatus}>
    <span className={propertyStatusSpan}>
      { status.replace('_', ' ') }
    </span>
    <StatusIndicator
      status={status}
    />
  </div>
);

PropertyStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default PropertyStatus;
