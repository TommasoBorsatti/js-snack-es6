/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal*/

const Bici = [
  {
    nome: "Morbidozzi Deluxe",
    peso: 600,
  },
  {
    nome: "Ciccini Special",
    peso: 450,
  },
  {
    nome: "Paggetti Comunicare",
    peso: 5000,
  },
];

let biciLight = Bici[0];

for (let i = 1; i < Bici.length; i++) {

  if (Bici[i].peso < biciLight.peso) {
    biciLight = Bici[i]
  }
}

console.log(Bici);

let {nome, peso} = biciLight;
console.log(`La bici più leggera è la ${nome} che pesa esattamente ${peso} grammi!`);
