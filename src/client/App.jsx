import React from 'react';
import { hot } from 'react-hot-loader';
import Card from './components/cards/cards'
import Box from './components/boxes/Boxes'

class App extends React.Component {
  render() {
    return (
      <div>
     <Card />
     <div className="text-center">

     <Box/>
     </div>
      
      </div>
    );
  }
}

export default hot(module)(App);
