import React from 'react';
import { hot } from 'react-hot-loader';

import Form from './components/form/form';
import Card from './components/card/card';

class App extends React.Component {
  render() {
    return (
      <div> <p>Look, a flashcard</p>
        <Card/>

      </div>
    );
  }
}

export default hot(module)(App);