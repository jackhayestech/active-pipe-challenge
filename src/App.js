import React from 'react';
import { appContainer } from './assets/styles/layout.module.css';

import Alert from './assets/components/ui/alert/Alert.connector';
import StartupSpinnerWrapper from './assets/components/application/startup_spinner_wrapper/StartupSpinnerWrapper.connector';
import ApplicationWrapper from './assets/components/application/application_wrapper/ApplicationWrapper.connector';

const App = () => (
  <div className={appContainer}>
    <Alert />
    <StartupSpinnerWrapper />
    <ApplicationWrapper />
  </div>
);

export default App;
