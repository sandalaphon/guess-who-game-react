import React from 'react';

class FiftyFiftySelector extends React.Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){

    const trait = this.props.traits[this.props.selected][event.target.value]
    console.log("trait", trait)
    console.log("props.selected", this.props.selected)
    this.props.setSubTrait(trait)
  }


  render() {
    var selected = this.props.selected
    var options = this.props.traits[selected].map((trait, index)=>{
     return(
        <option value = {index}  key = {index}>
            {trait}
        </option>
        )
     
    })

    return (
      <select id = "fifty_fifty"  
      onChange   = {this.handleChange} >

        {options}

      </select>
    );
  }
}

export default FiftyFiftySelector;