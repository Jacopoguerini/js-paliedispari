// 2 - Pari e Dispari

// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var sceltaUtente = prompt("Scegli pari o dispari e scrivilo qui:");
console.log("La scelta del giocatore è: " + sceltaUtente);
var numeroUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"));
console.log("Il numero del giocatore è: " + numeroUtente);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomPc(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
}
numeroPc = randomPc(1, 5);
console.log("Il numero del pc è: " + numeroPc);

// Sommiamo i due numeri
var somma = numeroUtente + numeroPc;
console.log("La somma dei due numeri è: " + somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function numeroPari (num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

var controllo = numeroPari(somma);
console.log("Il numero è pari: " + controllo);
// Dichiariamo chi ha vinto.

if (((sceltaUtente == "pari") && (controllo == true)) || ((sceltaUtente == "dispari") && (controllo == false))) {
    alert("Complimenti! Hai vinto!")
} else {
    alert("Oh no, purtroppo hai perso!")
}