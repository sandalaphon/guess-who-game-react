import React from 'react';
import CardContainer from './CardContainer'
import DropDownContainer from './DropDownContainer'
import MakeAGuessSelector from '../components/MakeAGuessSelector'
import WinLoseDeclaration from '../components/WinLoseDeclaration'
import Candidate from "../models/candidate.js"

class GuessWhoContainer extends React.Component {
  constructor(props){
    super(props);
    this.traits = {
     hair_style: ["hair_partition", "curly_hair", "hat", "bald", "hair_stuff", "long_hair"],
     hair_colour: ["ginger", "white", "brown", "blond", "black"],
     facial_attributes: ["big_mouth", "big_nose", "red_cheeks", "blue_eyes", "sad_looking"],
     facial_hair: ["has_facial_hair", "moustache", "beard"],
     other: ["glasses", "ear_rings", "female"]
    }
    var alex = new Candidate("Alex", 'https://i0.wp.com/www.fullbellylaughs.com/wp-content/uploads/2016/12/Alex.png')
      alex.hair_colour.black                =true
      alex.facial_attributes.big_mouth      =true
      alex.facial_hair.has_facial_hair      =true
      alex.facial_hair.moustache            =true
    var alfred = new Candidate("Alfred", 'https://i1.wp.com/www.fullbellylaughs.com/wp-content/uploads/2016/12/Alfred.png')
      alfred.hair_style.hair_partition      =true
      alfred.hair_style.long_hair           =true
      alfred.hair_colour.ginger             =true
      alfred.facial_attributes.blue_eyes    =true
      alfred.facial_attributes.sad_looking  =true
      alfred.facial_hair.has_facial_hair    =true
      alfred.facial_hair.moustache          =true
    var anita = new Candidate("Anita", 'https://i2.wp.com/www.fullbellylaughs.com/wp-content/uploads/2016/12/Anita.png')
      anita.hair_style.hair_partition       =true
      anita.hair_style.hair_stuff           =true
      anita.hair_style.long_hair            =true
      anita.hair_colour.white               =true
      anita.facial_attributes.red_cheeks    =true
      anita.facial_attributes.blue_eyes     =true
      anita.other.female                    =true
    var anne = new Candidate("Anne", 'https://i2.wp.com/www.fullbellylaughs.com/wp-content/uploads/2016/12/Anne.png')
      anne.hair_style.curly_hair            =true
      anne.hair_style.hair_partition        =true
      anne.hair_colour.black                =true
      anne.other.ear_rings                  =true
      anne.other.female                     =true
    var bernard = new Candidate("Bernard", 'https://i0.wp.com/www.fullbellylaughs.com/wp-content/uploads/2016/12/Bernard.png')
      bernard.hair_style.hat                =true
      bernard.hair_style.hair_stuff         =true
      bernard.hair_colour.brown             =true
      bernard.facial_attributes.big_nose    =true
      bernard.facial_attributes.sad_looking =true
      var bill = new Candidate("Bill", 'https://i2.wp.com/www.fullbellylaughs.com/wp-content/uploads/2016/12/Bill.png')
      bill.hair_style.bald                 =true
      bill.hair_colour.ginger              =true
      bill.facial_attributes.red_cheeks    =true
      bill.facial_hair.has_facial_hair     =true
      bill.facial_hair.beard               =true
      var charles = new Candidate("Charles", 'https://i0.wp.com/www.fullbellylaughs.com/wp-content/uploads/2016/12/Charles.png')
      charles.hair_style.hair_partition    =true
      charles.hair_colour.blond            =true
      charles.facial_attributes.big_mouth  =true
      charles.facial_hair.has_facial_hair  =true
      charles.facial_hair.moustache        =true
    
      var claire = new Candidate("Claire", "https://i2.wp.com/www.fullbellylaughs.com/wp-content/uploads/2016/12/Claire.png")
      claire.hair_style.hat               =true
      claire.hair_style.hair_stuff        =true
      claire.hair_colour.ginger           =true
      claire.other.glasses                =true
      claire.other.female                 =true

      var david = new Candidate("David", "https://i2.wp.com/www.fullbellylaughs.com/wp-content/uploads/2017/01/David.png")
      david.hair_colour.blond             =true
      david.facial_attributes.big_mouth   =true
      david.facial_attributes.big_nose    =true
      david.facial_hair.has_facial_hair   =true
      david.facial_hair.beard             =true

      var sam = new Candidate("Sam", "https://i2.wp.com/www.fullbellylaughs.com/wp-content/uploads/2017/01/Sam.png")
      sam.hair_style.bald                 =true
      sam.hair_colour.white               =true
      sam.other.glasses                   =true

      var eric = new Candidate("Eric", "https://i1.wp.com/www.fullbellylaughs.com/wp-content/uploads/2017/01/Eric.png")
      eric.hair_style.hat                 =true
      eric.hair_colour.blond              =true
      eric.facial_attributes.big_mouth    =true

      var frans = new Candidate("Frans", "https://i1.wp.com/www.fullbellylaughs.com/wp-content/uploads/2017/01/Frans.png")
      frans.hair_style.curly              =true
      frans.hair_style.hair_partition     =true
      frans.hair_colour.ginger            =true

      var philip = new Candidate("Philip", "https://i1.wp.com/www.fullbellylaughs.com/wp-content/uploads/2017/01/Phillip.png")
      philip.hair_colour.black            = true
      philip.facial_attributes.big_mouth  = true
      philip.facial_attributes.red_cheeks = true
      philip.facial_hair.has_facial_hair  = true
      philip.facial_hair.beard = true

      var george = new Candidate("George", "https://i1.wp.com/www.fullbellylaughs.com/wp-content/uploads/2017/01/George.png")
      george.hair_style.hat               = true
      george.hair_colour.white            = true
      george.facial_attributes.big_mouth  = true
 

      var richard = new Candidate("Richard", "https://i0.wp.com/www.fullbellylaughs.com/wp-content/uploads/2017/01/Richard.png")
      richard.hair_style.bald             = true
      richard.hair_colour.brown           = true
      richard.facial_hair.has_facial_hair = true
      richard.facial_hair.moustache       = true
      richard.facial_hair.beard           = true

      var maria = new Candidate("Maria", "https://i1.wp.com/www.fullbellylaughs.com/wp-content/uploads/2017/01/Maria.png")
      maria.hair_style.hat                = true
      maria.hair_style.hair_stuff         = true
      maria.hair_colour.brown             = true
      maria.other.ear_rings               = true

      var paul = new Candidate("Paul", "https://i0.wp.com/www.fullbellylaughs.com/wp-content/uploads/2017/01/Paul.png")
      paul.hair_style.hair_partition      = true
      paul.hair_colour.white              = true
      paul.facial_attributes.big_nose     = true
      paul.other.glasses                  = true

      var max = new Candidate("Max", "https://i0.wp.com/www.fullbellylaughs.com/wp-content/uploads/2017/01/Max.png")
      max.hair_colour.black               = true
      max.facial_attributes.big_mouth     = true
      max.facial_attributes.big_nose      = true
      max.facial_hair.has_facial_hair     = true
      max.facial_hair.moustache           = true

      var peter = new Candidate("Peter", "https://i0.wp.com/www.fullbellylaughs.com/wp-content/uploads/2017/01/Peter.png")
      peter.hair_style.hair_partition     = true
      peter.hair_colour.white             = true
      peter.facial_attributes.blue_eyes   = true
      peter.facial_attributes.big_mouth   = true

      var robert = new Candidate("Robert", "https://i0.wp.com/www.fullbellylaughs.com/wp-content/uploads/2017/01/Robert.png")
      robert.hair_style.hair_partition    = true
      robert.hair_colour.brown            = true
      robert.facial_attributes.red_cheeks = true
      robert.facial_attributes.blue_eyes  = true

      var susan = new Candidate("Susan", "https://i1.wp.com/www.fullbellylaughs.com/wp-content/uploads/2017/01/Susan.png")
      susan.hair_style.hair_partition     = true
      susan.hair_style.long_hair          = true
      susan.hair_colour.blond             = true
      susan.facial_attributes.red_cheeks  = true
      susan.facial_attributes.big_mouth   = true
      susan.other.ear_rings               = true

      var tom = new Candidate("Tom", "https://i0.wp.com/www.fullbellylaughs.com/wp-content/uploads/2016/12/Tom.png")
      tom.hair_style.bald                 = true
      tom.hair_colour.black               = true
      tom.facial_attributes.blue_eyes     = true
      tom.other.glasses                   = true
      var herman = new Candidate("Herman", "https://i2.wp.com/www.fullbellylaughs.com/wp-content/uploads/2017/01/Herman.png")
      herman.hair_style.bald              = true
      herman.hair_colour.ginger           = true
      herman.facial_attributes.big_mouth  = true

      var joe = new Candidate("Joe", "https://i2.wp.com/www.fullbellylaughs.com/wp-content/uploads/2017/01/Joe.png")
      joe.hair_colour.blond               = true
      joe.facial_attributes.big_nose      = true
      joe.other.glasses                   = true




      this.candidates = [
        alex, alfred, anita, anne, bernard, bill, charles, claire, david, eric, frans , george, herman, joe, maria, max, paul, peter, philip, richard, robert, sam, susan, tom
    ]

    const randIndex = Math.floor( Math.random() * this.candidates.length )
    this.computerChoice = this.candidates[randIndex] 
    let candidates_remaining = this.candidates.map((candidate)=> {
      return candidate.eliminated
    })
    
    this.state = {
      traits: this.traits,
      candidates: this.candidates,
      computerChoice: this.computerChoice,
      candidates_remaining: candidates_remaining,  
      victory: null,
      guess: null
        }
    };

    victory_attempt(name){
      
      if(this.state.computerChoice.name===name){
        this.setState({victory: true})
      }else{
        this.setState({victory: false})
      }
      this.setState({guess: name})
    }
  
  update_remaining(){
    let candidates_remaining = this.candidates.map((candidate)=> {
      return candidate.eliminated
    })
    this.setState({candidates_remaining: candidates_remaining})
  }

  render(){
    console.log(this.state.candidates_remaining)
    return (
      <div className="outer_container">
        <img src = "http://cdn.toy-tma.com/wp-content/uploads/2016/03/HA5696-500x336.jpg" 
        className="logo"/>
        <CardContainer 
        candidates = {this.state.candidates} 
        remaining  = {this.state.candidates_remaining} />
        <DropDownContainer 
        traits           = {this.state.traits}
        candidates       = {this.state.candidates} 
        computerChoice   = {this.state.computerChoice} 
        update_remaining = {this.update_remaining.bind(this)}/>
        <MakeAGuessSelector 
        victory_attempt  = {this.victory_attempt.bind(this)} 
        candidates       = {this.state.candidates}/>
        <WinLoseDeclaration 
        computerChoice    = {this.state.computerChoice} 
        guess             = {this.state.guess} 
        victory_condition = {this.state.victory}/>
      </div>
    );
  }
}

export default GuessWhoContainer;