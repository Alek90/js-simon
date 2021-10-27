/*  Un alert() espone 5 numeri generati casualmente.
    Da li parte un timer di 30 secondi.
    Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


// Variabili inizializzate per array:
let casualNumbers = [];
let userNumbers = [];
let rememberedNumbers = [];

// Variabili inizializzate:
let number = "";
let totalRememberedNumbers = "";


// Oggetti utili dalla dom:

const correctNumber = document.querySelector(".number");
const result = document.querySelector(".result");


// Funzioni richiamabili:

function generateNumber (limit) {
    return Math.floor(Math.random() * limit)
}


// Finchè casualNumber non conterrà 5 numeri, generiamo ed inseriamo numeri random:

while (casualNumbers.length < 5) {
    const randomNumber = generateNumber(100);
    casualNumbers.push(randomNumber);
}


// alert:

alert (casualNumbers);


// Timer e prompt:

/*  Passati 30s, appare un prompt che chiede un num ricordato.
    I numeri corretti vengono salvati in un array.
    Tutti i numeri vengono conservati in un secondo array, dopodichè l'operazione si ripeterà fino ad aver inserito 5 numeri.
*/

setTimeout(function numberRegister() {

    while (userNumbers.length < 5) {

        let number = Number(prompt ("Which number do you remember?"));

        if (casualNumbers.includes(number) && !rememberedNumbers.includes(number)) {
            rememberedNumbers.push(number)
        }
        
        userNumbers.push(number);
        
        totalRememberedNumbers = rememberedNumbers.length

        // viene mandato a schermo il numero di numeri corretti, e viene indicato quali siano:
        result.innerHTML = "Hai ricordato " + rememberedNumbers.length + " numeri!";
        correctNumber.innerHTML = "Questi sono i numeri che hai ricordato: " + rememberedNumbers;

    }
    
}, 3000)
        
