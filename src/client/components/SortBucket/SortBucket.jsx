import React from 'react';

class SortBucket extends React.Component {
    render() {
        return (<div>
            <button onClick={(boolean)=>{this.props.sortCard(true)}}>I know!</button>
            <button onClick={(boolean)=>{this.props.sortCard(false)}}>I don't know...</button>
        </div>)
    }
}

export default SortBucket;