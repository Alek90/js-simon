/*  Un alert() espone 5 numeri generati casualmente.
    Da li parte un timer di 30 secondi.
    Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

let userNumbers = []
let number = "";
let rememberedNumbers = []
let totalRememberedNumbers = "";

const correctNumber = document.querySelector(".number");
const result = document.querySelector(".result");

// Funzioni:
function generateNumber (limit) {
    return Math.floor(Math.random() * limit)
}


// Craeiamo un array di 5 numeri random:

let casualNumbers = [];

// Finchè casualNumber non conterrà 5 numeri, generiamo ed inseriamo numeri random:

while (casualNumbers.length < 5) {
    const randomNumber = generateNumber(100);
    casualNumbers.push(randomNumber);
}
console.log(casualNumbers);



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
        console.log(totalRememberedNumbers);

        // viene mandato a schermo il numero di numeri corretti, e viene indicato quali siano:
        result.innerHTML = rememberedNumbers.length
        correctNumber.innerHTML = rememberedNumbers

    }
    
}, 3000)
        









