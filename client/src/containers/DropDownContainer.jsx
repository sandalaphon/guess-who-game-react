import React from 'react'
import PickaTraitSelector from '../components/PickaTraitSelector';
import FiftyFiftySelector from '../components/FiftyFiftySelector';

class DropDownContainer extends React.Component{
  constructor(props){
    super(props)
    this.state={
      selectedTrait: "hair_style",
      selectedSubTrait: "hair_partition"
    }
  }

  setSelectedTrait(trait){
   this.setState({selectedTrait: trait})
   if(!this.props.traits[trait].includes(this.state.selectedSubTrait)){
    this.setSelectedSubTrait(this.props.traits[trait][0])
   }
   

 }

 setSelectedSubTrait(trait){
  this.setState({selectedSubTrait: trait})
}

handleClick(){
 if(this.props.computerChoice[this.state.selectedTrait][this.state.selectedSubTrait]){
  alert(`The person in question has: ${this.state.selectedTrait} : ${this.state.selectedSubTrait}`)
  this.props.candidates.forEach((candidate)=>{
    if(!candidate[this.state.selectedTrait][this.state.selectedSubTrait]){
      candidate.eliminated=true
    }
  })

}else{
  this.props.candidates.forEach((candidate)=>{

    if(candidate[this.state.selectedTrait][this.state.selectedSubTrait]){
      candidate.eliminated=true
    }
  })
 }
 console.log('here')
  this.props.update_remaining()
}

render(){

  return(
    <div className="dropdowns">

    <PickaTraitSelector 
    selected    = {this.state.selectedTrait} 
    setSelected = {this.setSelectedTrait.bind(this)} 
    traits      = {this.props.traits}/>

    <FiftyFiftySelector 
    setSubTrait    = {this.setSelectedSubTrait.bind(this)} 
    selected       = {this.state.selectedTrait} 
    traits         = {this.props.traits}/>

    <button 
    className    = "select_button" 
    onClick      = {this.handleClick.bind(this)}
    >Choose Trait?</button>
    </div>
    )
}


};

export default DropDownContainer