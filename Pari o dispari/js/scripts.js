//Utente sceglie pari o dispari
//Utente inserisce un numero compreso tra 1 e 5
//Generazione numero random per pc
//Somma dei numeri e stabiliamo se è pari o dispari
//Stabiliamo chi ha vinto


//Utente sceglie pari o dispari

const userChoice = prompt ('scegli pari o dispari');
console.log (`hai scelto:${userChoice}`);

//Utente inserisce un numero compreso tra 1 e 5
const userNumber = parseInt (prompt('scegli un numero da 1 a 5'));
console.log (`hai scelto il numero:${userNumber}`);

//Generazione numero random per pc

function generateRandomNumber (min, max) {
    const randomNumber = Math.floor (Math.random() * (max - min) + min);
    return randomNumber
}

const randomNumber = generateRandomNumber (1,5);
console.log (`numero computer:${randomNumber}`);

//Somma dei numeri e stabiliamo se è pari o dispari

function sumElements (element1, element2) {
    let sum = element1 + element2;

    if (sum % 2 === 0) {
        sum = 'pari';
    }

    else {
        sum = 'dispari';
    }
    
    return sum;
}

//Stabiliamo chi ha vinto

let evenOdd = sumElements (userNumber, randomNumber); 
console.log (`risultato somma:${evenOdd}`);

if (evenOdd === userChoice) {
    let result = 'hai vinto!';
    console.log(result);
}

else {
    let result = 'hai perso!';
    console.log(result);

    const finalResult = document.querySelector ('#final-result');
    console.log ('finalResult', finalResult, typeof finalResult);
    finalResult.innerHTML = result;
}

