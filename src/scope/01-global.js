//variables

var a; // declarar variable
var b = 'b'; // declarando y asignando
b = 'bb'; //reasignando 
var a = 'aa'; //redeclaración y reasignación

//Global scope
//cualquier variables que se encuentre en el documento que se instancian en el objeto window

//como la variable es global, se puede acceder a ella desde dentro de una función
var fruit = 'Apple';

function bestFruit(){
    console.log(fruit);
}
bestFruit();

//si no declaras correctamente una variable se convertirá en global
function countries(){
    country = 'Colombia'; //asignación sin declaración = variable global
    console.log(country);
}

countries();
console.log(country);