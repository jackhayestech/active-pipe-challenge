import React from 'react';

import { appContainer } from './assets/styles/layout.module.css';
import StartupSpinnerWrapper from './assets/components/layout/startup_spinner_wrapper/StartupSpinnerWrapper.connector';

const App = () => {
  return (
    <div className={appContainer}>
      <StartupSpinnerWrapper />
    </div>
  );
}

export default App;
