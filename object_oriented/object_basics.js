// Create the dog constructor
function Dog(name, earType, personality) {
    this.name = name;
    this.numEars = 2;
    this.size = 100;
    this.personality = personality;
    this.earType = earType;
}
// Create Puppy constructor passing in the dog constructor and personality
function Puppy(dogConstructor, name){
    // Set shared properties between dog and puppy
    this.numEars = dogConstructor.numEars;
    this.earType = dogConstructor.earType;
    this.parentName = dogConstructor.parentName;
    this.dogPrototype = Dog.prototype;
    // Set puppy size based on Dog size
    this.size = dogConstructor.size * 0.35;
    // Set unique puppy personality and name
    this.name = name;
    this.personality = dogConstructor.personality;
}
//Set dog prototype properties:
Dog.prototype.numLegs = 4;
Dog.prototype.isDog = true;
// set function that can be called by every dog
Dog.prototype.canBark = (barkType1, barkType2, barkType3) => `${barkType1}! ${barkType2} ${barkType3}!`;
Puppy.prototype.isPuppy = true;


  // Create two dog objects
  let beagle = new Dog("Snoopy", "droopy", "Frisky",);
  let protoDog = new Dog("test_subject_239423", "straight-eared", "aggressive");
  
  //Create puppy object
  let archie = new Puppy(beagle, "Archimedes");

//Display complete beagle/puppy object by merging dog prototype with beagle object
  let displayBeagle = JSON.stringify({...Dog.prototype, ...beagle})
  let displayArchi = JSON.stringify({...Puppy.prototype, ...archie})
  console.log(displayBeagle);
  console.log(displayArchi);
  
// display properties of a beagle and puppy
console.log("Ear Type: " + archie.earType)
// display properties unique to archie  
console.log("name: " + archie.name);

// Anything within the dog prototype can be accessed by archie:
//Call the canBark function from the puppy
console.log(archie.dogPrototype.canBark("Long Howl", "Penetrating Gaze o.o ", "Sharp Bark"))
console.log("Archie is a dog! " + archie.dogPrototype.isDog);

// Note: The specific puppy instance with the name "Archimedes" 
// gains all properties from the dog prototype, puppy prototype,
// and has some unique properties like name and personality.

// Create a new protoDog puppy:
let tiny = new Puppy(protoDog, "Tiny")
// assign bark type to tiny
// Display tiny object:
let displayTiny = JSON.stringify({...Puppy.prototype, ...tiny})
console.log(displayTiny)
// Display properties unique to tiny and protoDogs
console.log(tiny.parentName, tiny.personality, tiny.earType)
// display properties unique to tiny
console.log("name: " + tiny.name)
// Make tiny bark:
console.log(tiny.dogPrototype.canBark("bark bark bark!", "Ggggrrroooowwwl", "Shriek!"));
