import React from 'react'
import Card from '../components/Card'

class CardContainer extends React.Component{
  constructor(props){
    super(props)
    this.state={
      cardfront: "front",
      cardback: "back",
      candidates_remaining: this.props.candidates_remaining
    }
  }

  eliminated(){
    this.setState({cardfront:"front"})
    this.setState({cardback: "back"})
  }

render(){
  const cardNodes = this.props.candidates.map((candidate, index)=>{
  var classfront = ""
  var classback = ""
    if(candidate.eliminated)
      {
    classfront= "back"
    classback= "front"
      }else{
       classfront= "front"
      
    classback= "back"
    
  }

  return  <Card classfront = {classfront} classback = {classback} candidate={candidate} key={index} eliminated={this.eliminated.bind(this)}>
    </Card>
  })

return(
 
  <ul className="card_container">
    {cardNodes}
    </ul>

    )
  }

};

export default CardContainer