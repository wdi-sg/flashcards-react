import React from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';
import Cards from './components/cards/cards';
// import DontKnow from './components/dontknow/dontknow';

class App extends React.Component {
  render() {
    return (
      <div>
        <Cards />

      </div>
    );
  }
}

export default hot(module)(App);