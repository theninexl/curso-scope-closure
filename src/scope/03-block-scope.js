// todo lo que está dentro de handlebars { } es un bloque

function fruits(){
    if (true) {
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1); //esta si se puede acceder porque es global
    console.log(fruit2); //esta no se puede acceder porque es block scope dentro del if
    console.log(fruit3); //esta no se puede acceder porque es block scope dentro del if
}

fruits();

// ejemplo 2: arrastrando algunos console.log dentro del bloque

function fruits(){
    if (true) {
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope

        console.log(fruit2); //esta si se puede acceder porque está dentro del mismo bloque 
        console.log(fruit3); //esta si se puede acceder porque está dentro del mismo bloque
    }
    console.log(fruit1); //esta si se puede acceder porque es global
    
}

fruits();