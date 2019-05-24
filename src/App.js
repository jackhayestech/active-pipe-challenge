import React from 'react';
import { appContainer } from './assets/styles/layout.module.css';

import StartupSpinnerWrapper from './assets/components/layout/startup_spinner_wrapper/StartupSpinnerWrapper.connector';
import PropertiesWrapper from './assets/components/properties/PropertiesWrapper.connector';

const App = () => (
  <div className={appContainer}>
    <StartupSpinnerWrapper />
    <PropertiesWrapper />
  </div>
);

export default App;
