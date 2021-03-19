/*Snack 2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

function getRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const Squadre = [
  {
    nome: "Deportivo Morbidozzi",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Ciccini Virtus",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Sporting Paggetti",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Nafondi Club",
    puntiFatti: 0,
    falliSubiti: 0,
  },
];

for (let i = 0; i < Squadre.length; i++) {
  Squadre[i].puntiFatti = getRandom(0,18);
  Squadre[i].falliSubiti = getRandom(0,20);
}

console.log(Squadre);

const ArrayMisteryo = [];

for (var i = 0; i < Squadre.length; i++) {
  ArrayMisteryo.push({
    nome: Squadre[i].nome,
    falliSubiti: Squadre[i].falliSubiti,
  });
}

console.log(ArrayMisteryo);
