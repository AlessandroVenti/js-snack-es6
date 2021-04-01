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
// $(document).ready(rangeYourArray( 
//                                    parseInt(prompt(`Inserisci un range minimo...`)),
//                                    parseInt(prompt(`Inserisci un range massimo...`)),
//                                    generateArray(10, 1, 10))
//                                 );


                                        // ---> Es1 <---
                                        // Creare un array di oggetti: ogni oggetto descriverà 
                                        // una bici da corsa con le seguenti proprietà: nome e peso. 
                                        // Stampare a schermo la bici con peso minore.

function bikesArray() {                                                 
     return [
          { 'name' : 'Gianluca', 'weight' : 30 },
          { 'name' : 'Antonio', 'weight' : 20 },
          { 'name' : 'Olga', 'weight' : 10 },
          { 'name' : 'Judy', 'weight' : 11 },
          { 'name' : 'Panam', 'weight' : 15 },
          { 'name' : 'Lorenzo', 'weight' : 25 },
     ];
}


function findLightBike(array) {
     const minWeightBikes = [];
     array.forEach(element => minWeightBikes.push(element.weight));
     const minWeight = Math.min(...minWeightBikes);
     const minWeightBike = array.filter(element => element.weight === minWeight);
     console.log(`most light bike :`, minWeightBike);
     return minWeightBike;
     
}
     
// $(document).ready(findLightBike(bikesArray()));


//                                    //Soluzione usando il destructuring

function bikesArray2() {                                                 
     return [
          { 'name' : 'Gianluca', 'weight' : 30 },
          { 'name' : 'Antonio', 'weight' : 20 },
          { 'name' : 'Olga', 'weight' : 10 },
          { 'name' : 'Judy', 'weight' : 11 },
          { 'name' : 'Panam', 'weight' : 15 },
          { 'name' : 'Lorenzo', 'weight' : 25 },
     ];
}

function findLightBike2(array) {
     
     let lightBike = { name: '', weight: Number.MAX_SAFE_INTEGER };
     array.forEach(element => {
          let {name, weight} = element;
          if( weight < lightBike.weight) {
               lightBike = element;
          }
     });
     console.log(lightBike);
     return lightBike;
}

$(document).ready(findLightBike2(bikesArray2()));


