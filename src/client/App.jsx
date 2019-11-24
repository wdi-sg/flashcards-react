import React from 'react';
import { hot } from 'react-hot-loader';

import Card from './components/card/card';

class App extends React.Component {
  render() {
    return (
      <div>
        <Card />
        
      </div>
    );
  }
}

export default hot(module)(App);
