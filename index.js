// Your code here
class Cat {
    constructor(name, sex) {
       this.name = name;
       this.sex = sex;
       this.speak = function () {
          return 'Sasha says meow!'
       }
    }
 }
 
 
 class Dog {
    constructor(name, sex) {
       this.name = name;
       this.sex = sex;
       this.speak = function () {
          return 'Rufio says woof!'
       }
    }
 }
 
 class Bird {
    constructor(name, sex) {
       this.name = name;
       this.sex = sex;
       this.speak = function () {
          if (sex === 'male') {
             return 'It\'s me! Pablo, the parrot!'
          } else {
             return "Mable says squawk!"
          }
       }
    }
 }
 
 const bird = new Bird("Pablo", "male")
 const bird2 = new Bird("Mable", "female")
 
 