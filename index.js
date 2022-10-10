// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;  
  this.stomach = [];
  this.MaxStomach = 10;
}

// function Person(name, age, maxStomach = 10) {
//   this.name = name;
//   this.age = age;  
//   this.stomach = [];
//   this.MaxStomach = maxStomach;
// }

Person.prototype.eat = function(someFood){
  if(this.stomach.length < this.MaxStomach) {
    this.stomach.push(someFood)
  }
}
Person.prototype.poop = function(){
  this.stomach = []
}
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`
}



/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon
  this.tank = 0
  this.odometer = 0
}

Car.prototype.fill = function(gallons) {
  this.tank += gallons
}

Car.prototype.drive =  function(distance) {
  this.odometer += distance
  this.tank = this.tank - (distance / milesPerGallon)
  if(this.tank === 0){
    return `I ran out of fuel at $(distance) miles being ${this.odometer}`
  }
}


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype)

Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`
}

/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. When not bounded by any other scope 'This' has window or global scope. Arrow functions always have this scope which is why they do not work.
  2. Implicit binding is binding with dot syntax.  everything on the left of the . is bound the the things on the right.
  3. Explicit binding is when the call or apply functions are used to provide the context for the functions being used. bind can make this a more lasing connection
  4. New binding is a way to create things from a set of data, like procedurally generating enemies in a video game and requires the 'new' keyword
*/

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
