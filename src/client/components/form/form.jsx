import React from 'react';

import classnames from 'classnames';

import styles from './style.scss';

const cx = classnames.bind(styles)

class Form extends React.Component {

  constructor(){
    super();

    this.state = {
      clicked:false
    };
  }

  clickHandler(){

    this.setState({clicked:!this.state.clicked})
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
        <p className={display}>yay</p>
        <button onClick={()=>{this.clickHandler()}}>click to change</button>
        <input className={styles.name} />
      </div>
    );
  }
}

export default Form;