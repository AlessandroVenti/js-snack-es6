                              // GOAL: rifare e rivedere gli esercizi visti a lezione, prestando particolare attenzione alle nuove sintassi e al parallelismo tra le due


                                        // ---> Es1 <---
                                        // Creare un array di oggetti: ogni oggetto descriverà 
                                        // una bici da corsa con le seguenti proprietà: nome e peso. 
                                        // Stampare a schermo la bici con peso minore.

                                                 
function findLightBike() {

     const bikes = [
          { 'name' : 'Gianluca', 'weight' : 30 },
          { 'name' : 'Antonio', 'weight' : 20 },
          { 'name' : 'Olga', 'weight' : 10 },
          { 'name' : 'Judy', 'weight' : 11 },
          { 'name' : 'Panam', 'weight' : 15 },
          { 'name' : 'Lorenzo', 'weight' : 25 },
     ];

     const minWeightBikes = [];

     for( let i = 0; i < bikes.length; i++ ) {
          minWeightBikes.push(bikes[i].weight);
     }

     let minWeight = Math.min(...minWeightBikes);

     for ( let j = 0; j< bikes.length; j++ ) {
          if ( bikes[j].weight == minWeight ) {
               console.log(`most light bike :`, bikes[j]);
          }
     }
}
     
// $(document).ready(findLightBike);


                                   //Soluzione usando il destructuring

function findLightBike2() {
     const bikes = [
          { 'name' : 'Gianluca', 'weight' : 30 },
          { 'name' : 'Antonio', 'weight' : 20 },
          { 'name' : 'Olga', 'weight' : 10 },
          { 'name' : 'Judy', 'weight' : 11 },
          { 'name' : 'Panam', 'weight' : 15 },
          { 'name' : 'Lorenzo', 'weight' : 25 },
     ];
     
     let lightBike = { name: '', weight: Number.MAX_SAFE_INTEGER };
          for ( let i = 0; i< bikes.length; i++ ) {
               let { name, weight } = bikes[i];
               if ( weight < lightBike.weight ) {
                    lightBike = bikes[i];
               }
          }
          console.log(lightBike);

}

// $(document).ready(findLightBike2);



                                        // Creare un array di oggetti di squadre di calcio. 
                                   // Ogni squadra avrà diverse proprietà: 
                                   // nome, punti fatti, falli subiti.
                                   // Nome sarà l'unica proprietà da compilare, 
                                   // le altre saranno tutte settate a 0.
                                   // Generare numeri random al posto degli 0 nelle proprietà:
                                   // punti fatti e falli subiti
                                    // Usando la destrutturazione creiamo un nuovo array 
                                   // i cui elementi contengono solo nomi e falli subiti 
                                   // e stampiamo tutto in console.




   