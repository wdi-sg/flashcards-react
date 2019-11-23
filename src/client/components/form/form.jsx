import React from 'react';
import classnames from 'classnames';
import styles from './style.scss';
import Card from './components/Card/Card';
const cx = classnames.bind(styles)

class Form extends React.Component {

  constructor(){
    super();

    this.state = {

    };
  }

  clickHandler(){


  }

  render() {

    // calling cx sets all the styles on the element in the display variable
    const display = cx(
      styles.myclass, // styles that never change
      { // dynamic styles
        [styles.clicked]: this.state.clicked // make the key the style name, and the value the dynamic boolean
      }
    )

    return (
      <div>
        <p className={display}><Card /></p>
        <button onClick={()=>{this.clickHandler()}}>Check</button>
        <button onClick={()=>{this.clickHandler()}}>Next Card</button>
      </div>
    );
  }
}

export default Form;