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

// $(document).ready(findLightBike2(bikesArray2()));


                                   //Esercizio 2 diviso in 3 sezioni con 3 funzioni standalone.



                                        //1 
                                        //Creare un array di oggetti di squadre di calcio. 
                                        // Ogni squadra avrà diverse proprietà: 
                                        // nome, punti fatti, falli subiti.
                                        // Nome sarà l'unica proprietà da compilare, 
                                        // le altre saranno tutte settate a 0.


function footballDatabase() {

     return [
          { 'name' : 'Roma', 'score' : 0, 'penality' : 0 },
          { 'name' : 'Milan', 'score' : 0, 'penality' : 0 },
          { 'name' : 'Inter', 'score' : 0, 'penality' : 0 },
          { 'name' : 'Napoli', 'score' : 0, 'penality' : 0 },
          { 'name' : 'Parma', 'score' : 0, 'penality' : 0 },
          { 'name' : 'Juventus', 'score' : 0, 'penality' : 0 },
          { 'name' : 'Brescia', 'score' : 0, 'penality' : 0 }
     ];
}

// $(document).ready(footballDatabase);


                                        //2 
                                        // Generare numeri random al posto degli 0 nelle proprietà:
                                        // punti fatti e falli subiti

function getRandomNumber() {
     return Math.round(Math.random() * (100 - 1) + 1);
}


function changeScoresAndPenalities(database) {
     database.forEach(element => {
          element.score = getRandomNumber();
          element.penality = getRandomNumber();
     });
     console.log(database);
     return database;
     
}

// $(document).ready(changeScoresAndPenalities(footballDatabase()));



                                        //3
                                        // Usando la destrutturazione creiamo un nuovo array 
                                        // i cui elementi contengono solo nomi e falli subiti 
                                        // e stampiamo tutto in console.


function destructuringForNamesAndPenalties(database, randomizedDatabase)  {
     const nameAndPenalitiesDatabase = [];
     randomizedDatabase.forEach(element => {
          let {name, score} = element;
          let nameAndPenalitiesData = {name, score};
          nameAndPenalitiesDatabase.push(nameAndPenalitiesData);
     });
     console.log(`Full database : `, database );
     console.log(`Full database with random scores and penalties: `, randomizedDatabase);
     console.log(`Database with only names and scores: `, nameAndPenalitiesDatabase);
}


$(document).ready(destructuringForNamesAndPenalties(footballDatabase(), changeScoresAndPenalities(footballDatabase())));