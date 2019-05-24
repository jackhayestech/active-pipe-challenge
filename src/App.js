import React from 'react';
import { appContainer } from './assets/styles/layout.module.css';

import StartupSpinnerWrapper from './assets/components/startup_spinner_wrapper/StartupSpinnerWrapper.connector';
import ApplicationWrapper from './assets/components/application/application_wrapper/ApplicationWrapper.connector';

const App = () => (
  <div className={appContainer}>
    <StartupSpinnerWrapper />
    <ApplicationWrapper />
  </div>
);

export default App;
