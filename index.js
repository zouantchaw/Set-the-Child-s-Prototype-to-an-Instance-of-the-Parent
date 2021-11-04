// Instances of Dog should inherit from Animal

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype)

let beagle = new Dog();

console.log(beagle.eat())

