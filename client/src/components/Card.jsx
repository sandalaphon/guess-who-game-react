import React from 'react'



var Card = (props) => {

  var imgBackURL = "https://s-media-cache-ak0.pinimg.com/originals/6c/a0/16/6ca016115a894f69dea75cc80f95ad92.jpg"

  var divFStyle = {
    width: 100,
    height: 150,
    backgroundSize: '100px 150px',
   zIndex: 2,
  backgroundImage: 'url(' + props.candidate.url + ')' 
          }

  var divBackStyle = {
    width: 100,
    height: 150,
    backgroundSize: '100px 150px',
    backgroundPosition: "0 0",
   zIndex: 1,
   backgroundRepeat: "no-repeat",
  backgroundImage: 'url(' + imgBackURL + ')' 
          }

  var cardStyleSize = {
    float: 'left',
    width: 100,
    height: 150
  }

  var handleClick=()=>{
  props.candidate.eliminated=true
  props.eliminated()
  }

return(

 <li className="flip-container" style = {cardStyleSize} onClick={handleClick.bind(this)}>
   <div className="flipper">

     <div className={props.classfront} style={divFStyle}>
     </div>
     <div className={props.classback} style={divBackStyle}> 
     </div>

   </div>
 </li>
  )

}

export default Card