import React from 'react';

class Button extends React.Component {

    render() {
        return (
        <button onClick={this.props.clicked} disabled={this.props.disabled}>                   {this.props.buttonText}
        </button>
        );

    }

}

export default Button;