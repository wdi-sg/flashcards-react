import React from 'react';
import styles from './style.scss';
import classnames from 'classnames';
const cx = classnames.bind(styles)

class SortBucket extends React.Component {
    render() {
        let {questionNum,know,dunno} = this.props.state
        const knowButton = cx(
            styles.class,{
            [styles.show]: know.includes(questionNum)
        })
        const dunnoButton = cx(
            styles.class,{
            [styles.show]: dunno.includes(questionNum)
        })
        return (<div>
            <button className={styles.class} className={knowButton} onClick={()=>{this.props.sortCard(true)}}>I know!</button>
            <button className={dunnoButton} onClick={()=>{this.props.sortCard(false)}}>I don't know...</button>
        </div>)
    }
}

export default SortBucket;