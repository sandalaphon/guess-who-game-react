import React from 'react'

var WinLoseDeclaration = (props) => {
  var winString = ""
  if(props.guess ===props.computerChoice.name){
    winString =  `Congratulations!! You are right.  ${props.guess} is the correct answer `
  }else if(props.guess){
    winString = `Bad Luck! ${props.guess} is incorrent. The correct answer was: ${props.computerChoice.name}`
  }else{ winString = `Good Luck. Remember you only get one guess...`}
  return(
    <div className = "win_lose">
      <h2>{winString}</h2>
    </div>
    )
}

export default WinLoseDeclaration