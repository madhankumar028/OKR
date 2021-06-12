import React from 'react';

import { Accordion } from './components/Accordion/Accordion';

function App() {
  return (
    <div className="app">
      <header className="header">
        <p data-testid="okr__app--test" className="okr__app--wrapper">
          OKR APP
        </p>
        <Accordion title="test" shouldOpen></Accordion>
      </header>
    </div>
  );
}

export default App;
