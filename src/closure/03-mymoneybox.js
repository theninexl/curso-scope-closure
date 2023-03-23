function moneyBox(coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins} coins`);
}

moneyBox(5);
moneyBox(5); // llamar dos veces a la función hace que devuelva siempre el mismo valor

//utilizar un closure hace que la función recuerde el valor previo
function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);

