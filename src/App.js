import React from 'react';

import layout from './assets/styles/layout.module.css';
import LoadingSpinner from './assets/components/loading_spinner/LoadingSpinner.connector';

const App = () => {
  return (
    <div class={layout.appContainer}>
      <LoadingSpinner />
    </div>
  );
}

export default App;
