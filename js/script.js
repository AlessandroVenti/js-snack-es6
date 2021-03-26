                              // GOAL: rifare e rivedere gli esercizi visti a lezione, prestando particolare attenzione alle nuove sintassi e al parallelismo tra le due


                                        // ---> Es1 <---
                                        // Creare un array di oggetti: ogni oggetto descriverà 
                                        // una bici da corsa con le seguenti proprietà: nome e peso. 
                                        // Stampare a schermo la bici con peso minore.

                                                 
function findLightBike() {

     const bikes = [
          {'name' : 'Gianluca', 'weight' : 30},
          {'name' : 'Antonio', 'weight' : 20},
          {'name' : 'Olga', 'weight' : 10},
          {'name' : 'Judy', 'weight' : 11},
          {'name' : 'Panam', 'weight' : 15},
          {'name' : 'Lorenzo', 'weight' : 25},
     ];

     var minWeightBikes = [];

     for(let i = 0; i < bikes.length; i++) {
          minWeightBikes.push(bikes[i].weight);
     }

     var minWeight = Math.min(...minWeightBikes);

     for (let j = 0; j < bikes.length; j++) {
          if ( bikes[j].weight == minWeight ) {
               console.log(`most light bike :`, bikes[j]);
          }
     }
}
     
$(document).ready(findLightBike);




   