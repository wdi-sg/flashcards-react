import React from 'react';
import { hot } from 'react-hot-loader';
import styles from './style.scss';

import Form from './components/form/form';

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />

      </div>
    );
  }
}






export default hot(module)(App);