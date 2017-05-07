import React from 'react';

class MakeAGuessSelector extends React.Component {

  // handleChange(event){
  //   var guess = event.target.value
  //   this.props.victory_attempt(guess)
  // }
  // onChange= {this.handleChange.bind(this)}

  handleClick(){
    var guess = document.querySelector("#make_a_guess")
    this.props.victory_attempt(guess.value)
  }


  render() {
   var options = this.props.candidates.map((candidate, index)=>{
    if(!candidate.eliminated){
      return(
        <option key={index}>
            {candidate.name}
        </option>
        )
    }else{
      return null}
    
    })


    return (
      <div className="guess">
      <select id="make_a_guess" >
        {options}
      </select>
      <button className = "guess_button" onClick = {this.handleClick.bind(this)}>Choose this Person?</button>
      </div>
    );
  }
}

export default MakeAGuessSelector;