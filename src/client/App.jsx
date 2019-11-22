import React from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';
import Cards from './components/cards/cards';

class App extends React.Component {
  render() {
    return (
      <div>
        <Cards />
        <Form />
      </div>
    );
  }
}

export default hot(module)(App);