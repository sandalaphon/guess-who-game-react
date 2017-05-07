import React from 'react'
import PickaTraitSelector from '../components/PickaTraitSelector';
import FiftyFiftySelector from '../components/FiftyFiftySelector';

class DropDownContainer extends React.Component{
  constructor(props){
    super(props)
    this.state={selectedTrait: "hair_style"}
  }

setSelectedTrait(trait){
   this.setState({selectedTrait: trait})
}

render(){

return(
  <div className="dropdowns">
    <h2>DropDown Container</h2>
    <PickaTraitSelector selcted={this.state.selectedTrait} setSelected={this.setSelectedTrait.bind(this)} traits={this.props.traits}/>
    <FiftyFiftySelector selected={this.state.selectedTrait} traits={this.props.traits}/>
  </div>
    )
  }


};

export default DropDownContainer