                              // GOAL: rifare e rivedere gli esercizi visti a lezione, prestando particolare attenzione alle nuove sintassi e al parallelismo tra le due

                              // Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
                              // La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
                              // Usiamo i nuovi metodi degli array foreach o filter.


function generateArray (numberOfElements,minRangeOfNumbers,maxRangeOfNumbers) {
     let newArray = [];
     for ( let i = 0; i < numberOfElements; i++) {
          newArray[i] = Math.round(Math.random() * (maxRangeOfNumbers - minRangeOfNumbers) + minRangeOfNumbers);
     }
     console.log(`Current Array, ${newArray}`);
     return newArray;
}
function rangeYourArray(minRange, maxRange, array) {
     let rangedArray = array.filter((element, index) => index >= minRange && index <= maxRange)
     return console.log(`New Ranged Array : ${rangedArray}`);
}
$(document).ready(rangeYourArray( 
                                   parseInt(prompt(`Inserisci un range minimo...`)),
                                   parseInt(prompt(`Inserisci un range massimo...`)),
                                   generateArray(10, 1, 10)));


