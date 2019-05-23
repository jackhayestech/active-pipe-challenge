import React from 'react';

import { appContainer } from './assets/styles/layout.module.css';
import LoadingSpinner from './assets/components/loading_spinner/LoadingSpinner.connector';

const App = () => {
  return (
    <div class={appContainer}>
      <LoadingSpinner />
    </div>
  );
}

export default App;
