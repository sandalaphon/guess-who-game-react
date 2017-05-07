var Candidate = function(name, url){
  this.name = name
  this.url = url
  this.eliminated=false
  this.hair_style={
    hair_partition: false, 
    curly_hair: false, 
    hat: false, 
    bald: false, 
    hair_stuff: false, 
    long_hair: false
  }
  this.hair_colour={
    ginger: false, 
    white:false, 
    brown:false, 
    blond: false, 
    black: false

  }
  this.facial_attributes={
    big_mouth: false, 
    big_nose: false, 
    red_cheeks: false, 
    blue_eyes: false, 
    sad_looking: false

  }
  this.facial_hair={
    has_facial_hair: false, 
    moustache: false, 
    beard: false

  }
  this.other={
    glasses: false, 
    ear_rings: false, 
    female: false

  }

}

export default Candidate