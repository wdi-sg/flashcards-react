import React from 'react';

import classnames from 'classnames';

import styles from './style.scss';

const cx = classnames.bind(styles)

class Card extends React.Component {

  render() {

    return (
      <div>
        <input type="text" className={styles.name} onChange={this.props.answer} value={this.props.show} readOnly={this.props.read} />
      </div>
    );
  }
}

export default Card;