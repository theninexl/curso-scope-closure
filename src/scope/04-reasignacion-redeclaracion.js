var firstName; // declaración, tiene valor undefined
firstName = 'Oscar'; //asignando
console.log(firstName);

var lastName = 'David'; //asignando y declarando a la vez
lastName = 'Ana'; //reasignando
console.log(lastName);

var secondName = 'David'; //declarando y asignando
var secondName = 'Ana'; //redeclaración y reasignacion
console.log(secondName);

//let

let fruit = 'Apple'; //declarar y asignar
fruit = 'Kiwi'; //reasignar
console.log(fruit);
//let fruit = 'Banana'; //no puedes redeclarar una variable de bloque

//const

const animal = 'Dog'; //declarar y asginar
animal = 'Cat'; //reasignando
console.log(animal); //esto de error porque no puedes reasignar en const

const vehicles = []; //declarar
vehicles.push('Carrito');
console.log(vehicles);
vehicles.pop();
console.log(vehicles);
