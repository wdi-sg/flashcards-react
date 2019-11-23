import React from 'react';

class NewQns extends React.Component {
    changeHandler(){
        var newQ = document.getElementById("newQ").value;
        var newA = document.getElementById("newA").value;
        var correct = ""
        console.log(correct)
        this.props.store(newQ,newA,correct)
    }

    render(){
        return(
            <div>
                New Question: <input id="newQ"/>
                New Answer: <input id="newA"/>
                <button onClick={()=>{this.changeHandler()}}>Submit</button>
            </div>
        )
    }
}
export default NewQns;