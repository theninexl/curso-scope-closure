//esto da undefined
console.log(nameOfDog);
var nameOfDog = 'Elmo';
//esto da undefined porque la variable es declarada automaticamente por JS ANTES del console.log y la deja sin asignar (lo que resulta en undefined) como en en el ejemplo de debajo
var nameOfDog; //la inicialización se hace por hoisting o "elevación"
console.log(nameOfDog);
var nameOfDog = 'Elmo';

//de igual manera, lo hacemos con una función

nameOfDog(); 
function nameOfDog(){
    console.log(`El mejor perro es: ${perro}`);
} //la funcion  es elevada por hoisting antes de la llamada en tiempo de ejecución, no en nuestro código
var perro = 'Elmo'; //de igual manera, la variable perro se declara por elevación y se deja sin asignar, lo que produce el undefined.