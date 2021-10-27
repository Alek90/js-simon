/*  Un alert() espone 5 numeri generati casualmente.
    Da li parte un timer di 30 secondi.
    Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

let userNumbers = []
let number = "";

// Funzioni:
function generateNumber (limit) {
    return Math.floor(Math.random() * limit)
}

function numberRegister() {
    while (userNumbers.length < 5) {
        let number = Number(prompt ("Which number do you remember?"));
        userNumbers.push(number);
    }
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
    Il numero deve essere conservato in un array, dopodichè l'operazione si ripeterà fino ad aver inserito 5 numeri.
*/


//setTimeout(question, 3000)

// Creare un array per i numeri che segna l'utente:
/* while (userNumbers.length < 5) {
    let number = Number(prompt ("Which number do you remember?"));
    userNumbers.push(number);
}

console.log(userNumbers); */


setTimeout(numberRegister(), 3000)
        
        
console.log(userNumbers)
