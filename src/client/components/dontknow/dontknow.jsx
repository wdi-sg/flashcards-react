import React from 'react';

class DontKnows extends React.Component {
  constructor(){
    super();
    this.state = {
      idk: []
    }
  }

  addIdk(card) {
    this.setState({idk:[card, ...this.state.idk]})
  }

  render() {

    const list = this.state.idk.map((card)=>{
      return <li>{card.question} is {card.answer}</li>
    });

    return (

      <div>
        <button onClick={()=>{this.addIdk(this.props.card)}}>Don't Know</button><br/>
        IDKs:
        <ul>{list}</ul>
      </div>
    );
  }
}

export default DontKnows;