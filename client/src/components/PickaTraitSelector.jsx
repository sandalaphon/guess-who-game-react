import React from 'react';

class PickaTraitSelector extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.traits_for_select = []
    for(var trait in this.props.traits){
         this.traits_for_select.push(trait)
    }

    this.state = {
    }
  }
  handleChange(event) {
    const selectedTrait = this.traits_for_select[event.target.value]
    this.props.setSelected(selectedTrait)
  }

  
  render() {
  const options = this.traits_for_select.map((trait, index)=>{
    return (
    <option value={index} key={index}>{trait}</option>
    )
  })

    return (
      <select 
      id        = "pick_a_trait"  
      onChange  = {this.handleChange}>
       {options}
      </select>
    );
  }
}

export default PickaTraitSelector;


