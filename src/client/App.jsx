import React from 'react';
import { hot } from 'react-hot-loader';

import Card from './components/Card/Card';

class App extends React.Component {

  constructor(){
    super();
  }



  render() {
    return (
      <div>
        <Card />
      </div>
    );
  }
}

export default hot(module)(App);