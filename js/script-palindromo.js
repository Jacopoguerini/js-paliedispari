// 1 - Palindroma

// Chiedere all'utente di inserire una parola
/*
var word = prompt("Inserisci qui una parola");
console.log(word);

// lettere divise in array
var arrayWord = word.split("");
console.log(arrayWord);

// lettere in ordine contrario
var arrayReverse = arrayWord.reverse();
console.log(arrayReverse);

// parola al contrario
var wordReverse = arrayReverse.join("");
console.log(wordReverse);

// Creare una funzione per capire se la parola inserita è palindroma

function palindroma (word, wordReverse) {

    if (word == wordReverse) {
        return true;
    } else {
        return false;
    }
}

var risultato = palindroma(word, wordReverse);

if (risultato == true) {
    alert("Dai dai dai la parola " + word +" è palindroma");
} else {
    alert("La parola " + word + " non è palindroma");
}
*/

var word = prompt("Inserisci qui una parola");
console.log(word);

var letter;
var wordReverse = "";
var i = word.length - 1;

while (i >= 0) {
    letter = word[i];
    wordReverse += letter;
    console.log(letter);
    i--;
}

console.log(wordReverse);

if(word == wordReverse){
    alert("La parola scelta è palindroma");
} else {
    alert("La parola scelta non è palindroma");
}