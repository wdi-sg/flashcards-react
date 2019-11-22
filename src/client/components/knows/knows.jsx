import React from 'react';

class Knows extends React.Component {
  constructor(){
    super();
    this.state = {
      knows: []
    }
  }

  addKnown(card) {
    console.log("Add to knows")
    this.setState({knows:[card, ...this.state.knows]})
  }

  render() {

    const data = this.state.knows.length
    const list = this.state.knows.map((card)=>{
      return <li>{card.question} is {card.answer}</li>
    });

    return (

      <div>
        <button onClick={()=>{this.addKnown(this.props.card)}}>Knows {data}</button><br/>
        Knows:
        <ul>{list}</ul>
      </div>
    );
  }
}

export default Knows;