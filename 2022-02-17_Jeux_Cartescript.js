/* générer un jeux de carte de 52 cartes
les couleurs seront représenter par des lettres ["C", "K", "T", "P"]
les numéros, valets, reines .... ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
le résultat devrait ressembler à ça :
["S2 S3 S4 S5 S6 S7 S8 S9 S10 SJ SQ SK SA "
"H2 H3 H4 H5 H6 H7 H8 H9 H10 HJ HQ HK HA "
"D2 D3 D4 D5 D6 D7 D8 D9 D10 DJ DQ DK DA "
"C2 C3 C4 C5 C6 C7 C8 C9 C10 CJ CQ CK D7"] */

const tableCouleur = ["C", "K", "T", "P"];
const tableValeur = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let jeuxCarte = [];
let jeuxCarteTrafique = [];

for (let incr in tableCouleur) {
  for (let incr2 in tableValeur) {
    jeuxCarte.push(tableCouleur[incr] + tableValeur[incr2]);
  }
}
//console.log(jeuxCarte);

/*Exercice N°2; je supprime une carte au hasard, et dois ensuite retrouver la carte manquante */
jeuxCarteTrafique = [].concat(jeuxCarte);
console.log("Initial :" + jeuxCarte.length);
console.log("Trafiqué :" + jeuxCarteTrafique.length);

/* -> Génération Aléa */
let min = 0;
let max = jeuxCarteTrafique.length - 1;
let random = Math.floor(Math.random() * (max - min)) + min;



/* -> Suppression Carte du tableau */
let tabElementsSupprimes = jeuxCarteTrafique.splice(random, 1);

console.log(random + " : " + tabElementsSupprimes);
console.log("Initial :" + jeuxCarte.length);
console.log("Trafiqué :" + jeuxCarteTrafique.length);

/* -> Recherche elément supprimé */

for (let valeur of jeuxCarte) {
 
  if (!jeuxCarteTrafique.includes(valeur)) {
    console.log(valeur);
  }
}


// // Soluce Edouard
// const symbols = ["S", "H", "D", "C"];
// const card_num = [
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "J",
//   "Q",
//   "K",
//   "A",
// ];

// function gen_card_games() {
//   let card_games = [];
//   symbols.map((s) => {
//     card_num.map((c) => {
//       card_games.push(s + c);
//     });
//   });
//   return card_games;
// }

// function remove_card() {
//   const card_games_of_51 = gen_card_games();
//   const missing_card = Math.floor(Math.random() * 52);
//   card_games_of_51.splice(missing_card, 1);
//   return card_games_of_51;
// }

// function find_missing_card() {
//   const card_games_of_51 = remove_card();
//   const card_games_of_52 = gen_card_games();
//   card_games_of_52.map((card) => {
//     if (!card_games_of_51.includes(card)) {
//       console.log("card", card);
//     }
//   });
// }

// find_missing_card();