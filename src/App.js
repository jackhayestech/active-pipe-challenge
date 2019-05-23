import React from 'react';
import { appContainer } from './assets/styles/layout.module.css';

import store from './store';
import { loadProperties } from './redux/action_creators/Properties.actioncreator';
import StartupSpinnerWrapper from './assets/components/layout/startup_spinner_wrapper/StartupSpinnerWrapper.connector';

const App = () => {

  store.dispatch(loadProperties());
  
  return (
    <div className={appContainer}>
      <StartupSpinnerWrapper />
    </div>
  );
}

export default App;
