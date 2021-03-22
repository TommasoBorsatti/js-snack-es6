
/*Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.*/
//
// function arrayMania(array, min, max) {
//
//   var newArray = [];
//
//   for (var i = 0; i < array.length; i++) {
//
//     if (i >= min && i <= max) {
//       newArray.push(array[i]);
//     }
//
//   }
//
//   return newArray;
// }
//

//
// console.log(lista);
//
// var arrayMisteryo = arrayMania(lista, 2, 6);
//
// console.log(arrayMisteryo);



const Lista = ["carote", "pomodori", "pastelli", "pennelli", "colori", "bicchieri", "pane", "latte", "vino"];

const RandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min );

const numMin = RandomNum (0,3);
const numMax = RandomNum (5, 7);

const ArrayMisteryo = Lista. filter((element, index) => index > numMin && index < numMax);

console.log(ArrayMisteryo);
