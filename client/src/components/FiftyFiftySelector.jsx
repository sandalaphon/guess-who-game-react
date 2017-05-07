import React from 'react';

class FiftyFiftySelector extends React.Component {

  render() {
    var selected = this.props.selected
    console.log("selected",selected)
    console.log("selected",this.props.traits[selected])
    var options = this.props.traits[selected].map((trait, index)=>{
     return(
        <option key={index}>
          {trait}
        </option>
    )
     
    })

    console.log("50/50", this.props.selected)
    return (
      <select id="fifty_fifty">
        {options}
      </select>
    );
  }
}

export default FiftyFiftySelector;