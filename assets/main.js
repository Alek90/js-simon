/*  Un alert() espone 5 numeri generati casualmente.
    Da li parte un timer di 30 secondi.
    Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/



// Funzioni:
function generateNumber (limit) {
    return Math.floor(Math.random() * limit)
}



// Craeiamo un array di 5 numeri random:

let casualNumbers = [];
let number = "";

// Finchè casualNumber non conterrà 5 numeri, generiamo ed inseriamo numeri random:
while (casualNumbers.length < 5) {
    const randomNumber = generateNumber(100)
    casualNumbers.push(randomNumber)
}
console.log(casualNumbers);

// alert:
