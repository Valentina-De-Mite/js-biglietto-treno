/* DESCRIZIONE
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (ovvero con massimo due decimali, per indicare i centesimi sul prezzo).
*/

/* Strumenti:
- prompt x2 (km del viaggio e eta' del passeggero)
- console.log(typeof Number(quantity))
- moltiplico i km per 0.21
- if eta' > o uguale 65: -40%
- if eta' < o = 17: -20%
- document.getElementById
- console.log 
*/

// chiedo i km del viaggio

const userKm = prompt("Inserisci i km del tuo percorso:");

console.log(Number(userKm));

// chiedo eta' del passeggero

const userAge = prompt("Inserisci la tua eta':");
console.log(Number(userAge));

// calcolo il prezzo del biglietto
let x = userKm;
let y = 0.21;
let z = x * y;
console.log(z + " Euro");

let discount = 0;

// calcolo lo sconto minorenni

if (userAge < 18) {
  discount = (z * 20) / 100;
}

// calcolo lo sconto > 65

if (userAge > 65) {
  discount = (z * 40) / 100;
}

//  applico lo sconto
const newPrice = z - discount;

console.log(Math.round(newPrice) + " Euro");
