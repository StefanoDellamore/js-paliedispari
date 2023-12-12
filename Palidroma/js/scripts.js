//chiedere all'utente una parola casuale
//stabiliamo se la parola è polindroma o meno
    //creiamo una funzione per capire se la parola è polindroma
    //verificare se la parola al contrario è uguale
    //si: è polindroma //no: non è polindroma

//chiedere all'utente una parola casuale
const insertedWord = prompt ('inserisci una parola casuale:');
console.log (insertedWord);

//creiamo una funzione per capire se la parola è polindroma
     //verificare se la parola al contrario è uguale
function verificaPalindromo (word) {
    const wordReverse = word.split ('');
    const wordDivise = wordReverse.reverse ('');
    let wordReverse2 = wordDivise.join ('');

    //si: è polindroma //no: non è polindroma
    if (word === wordReverse2) {
        wordReverse2 = ('la parola è palindroma');
    }

    else {
        wordReverse2 = ('la parola non è palindroma');
    }

    return wordReverse2
}

const wordPalindromo = verificaPalindromo (insertedWord);
console.log(wordPalindromo);