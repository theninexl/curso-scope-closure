function greeting(){
    let username = 'Ana'; //declarada y asignada dentro de la función
    console.log(username);

    if(username === 'Ana'){
        console.log(`Hello ${username}!`);
    }
}

greeting();
//como la variable está declarada dentro de la función no puede ser llamada desde fuera y esto da error:
console.log(username);