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
    var alex = new Candidate("Alex", 'https://myrottingbrain.files.wordpress.com/2011/04/vlcsnap-2011-04-22-00h31m08s154.png?w=205&h=317')
    alex.hair_colour.black=true
    alex.facial_attributes.big_mouth=true
    alex.facial_hair.has_facial_hair=true
    alex.facial_hair.moustache=true
    var alfred = new Candidate("Alfred", 'https://cookiesandsangria.files.wordpress.com/2013/08/60c11-alfred.jpg?w=410&h=317')
    alfred.hair_style.hair_partition=true
    alfred.hair_style.long_hair=true
    alfred.hair_colour.ginger=true
    alfred.facial_attributes.blue_eyes=true
    alfred.facial_attributes.sad_looking=true
    alfred.facial_hair.has_facial_hair=true
    alfred.facial_hair.moustache=true
    var anita = new Candidate("Anita", 'https://cookiesandsangria.files.wordpress.com/2013/08/54f4f-anita.jpg?w=410&h=317')
    anita.hair_style.hair_partition=true
    anita.hair_style.hair_stuff=true
    anita.hair_style.long_hair=true
    anita.hair_colour.blond=true
    anita.facial_attributes.red_cheeks=true
    anita.facial_attributes.blue_eyes=true
    anita.other_attributes.female=true
    var anne = new Candidate("Anne", 'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr04/28/18/enhanced-19784-1398725409-6.jpg?downsize=715:*&output-format=auto&output-quality=auto')
    anne.hair_style.curly_hair=true
    anne.hair_colour.black=true
    anne.other_attributes.ear_rings=true
    anne.other_attributes.female=true
    var bernard = new Candidate("Bernard", 'https://myrottingbrain.files.wordpress.com/2011/04/vlcsnap-2011-04-22-00h32m44s881.png?w=205&h=317')
    bernard.hair_style.hat=true
    bernard.hair_style.hair_stuff=true
    bernard.hair_colour.brown=true
    bernard.facial_attributes.big_nose=true
    bernard.facial_attributes.sad_looking=true
    var bill = new Candidate("Bill", 'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr07/26/20/enhanced-buzz-12889-1398559298-6.jpg?downsize=715:*&output-format=auto&output-quality=auto')
    bill.hair_style.bald=true
    bill.hair_colour.ginger=true
    bill.facial_attributes.red_cheeks=true
    bill.facial_hair.has_facial_hair=true
    bill.facial_hair.beard=true
    var charles = new Candidate("Charles", 'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr03/26/20/enhanced-buzz-32320-1398559332-5.jpg?downsize=715:*&output-format=auto&output-quality=auto')
    charles.hair_style.hair_partition=true
    charles.hair_colour.blond=true
    charles.facial_attributes.big_mouth=true
    charles.facial_hair.has_facial_hair=true
    charles.facial_hair.moustache=true
    
      var claire = new Candidate("Claire", "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr03/26/20/enhanced-buzz-2167-1398559392-4.jpg?downsize=715:*&output-format=auto&output-quality=auto")
      claire.hair_style.hat=true
      claire.hair_style.hair_stuff=true
      claire.hair_colour.ginger=true
      claire.other_attributes.glasses=true
      claire.other_attributes.female=true

      var david = new Candidate("David", "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr05/26/20/enhanced-buzz-27160-1398559797-13.jpg?downsize=715:*&output-format=auto&output-quality=auto")
      david.hair_colour.blond=true
      david.hair_colour.big_mouth=true
      david.facial_hair.has_facial_hair=true
      david.facial_hair.beard=true

      var sam = new Candidate("Sam", "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr02/26/20/enhanced-buzz-27562-1398559729-12.jpg?downsize=715:*&output-format=auto&output-quality=auto")
      sam.hair_style.bald=true
      sam.hair_colour.white=true
      sam.glasses=true

      var eric = new Candidate("Eric", "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr06/26/20/enhanced-buzz-8023-1398559417-6.jpg?downsize=715:*&output-format=auto&output-quality=auto")
      eric.hair_style.hat = true
      eric.hair_colour.blond = true
      eric.facial_attributes.big_mouth = true

      this.candidates = [
        alex, alfred, anita, anne, bernard, bill, charles, claire, david, eric, sam
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
      victory: null
        }
    };
  

  render(){
    console.log(this.state.computerChoice)
    return (
      <div className="outer_container">
        <img src = "http://cdn.toy-tma.com/wp-content/uploads/2016/03/HA5696-500x336.jpg" className="logo"/>
        <CardContainer candidates={this.state.candidates} remaining={this.state.candidates_remaining}/>
        <DropDownContainer traits={this.state.traits}/>
        <MakeAGuessSelector />
        <WinLoseDeclaration />
      </div>
    );
  }
}

export default GuessWhoContainer;