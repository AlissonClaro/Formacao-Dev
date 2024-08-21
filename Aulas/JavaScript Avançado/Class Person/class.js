/* 
Classes


*/


// const person = {
//     name: "Alfim",
//     age: 32,
//     talk: function() {
//         console.log('Hello, my name is ${this.name}')
//     }
// }


class Person {
    constructor(name, age){
        console.log(`Hello, I'm ${name}`)
  
    this.name = name;
    this.age = age;
    }
    
    
    talk(){
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)
    }
}

const newPerson = new Person("Alfim", 32)
const newPerson1 = new Person("Alan", 34)
const newPerson2 = new Person("Albin", 30)

newPerson.talk()
newPerson1.talk()
newPerson2.talk()


