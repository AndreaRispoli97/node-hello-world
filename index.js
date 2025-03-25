// console.log('Hello Boolean');

// console.log(process.argv);

//Creiamo na variabile
let word = '';

//Ciclo dove andiamo a leggere ciò viene poi inserito(problema:
// In caso lo spazio è vuoto, non stampa nulla)

// for(let i = 2; i < process.argv.length; i++){
//         word += ` ${process.argv[i]}`
// }
// console.log(word);


//Aggiungiamo la condizione al ciclo per ovviare al problema del ciclo in caso gli spazi siano vuoti
if(process.argv.lenght > 2){
    for(let i = 2; i < process.argv.length; i++){
        word += ` ${process.argv[i]}`
}
console.log(word);
} else {
    console.log('Hello Boolean');
}

//Primo tentativo: Semplicemente stampiamo le prime due parole oltre all'array
//Problema: stampa solo due parole.

// let wordFirst = process.argv[2];
// let wordSecond = process.argv[3];

// console.log(`${wordFirst} ${wordSecond}`);
