let table = ["Banane", "Chocolat", "Citron", "Pistache", "Framboise", "Fraise", "Vanille"];
let parfum ;
let nb_glace = 0;


  for (let increment = 0; increment < table.length; increment++) {

    for (let ii = increment; ii < table.length -1; ii++) {
        parfum = table[increment] + "-" + table[ii + 1];

        nb_glace += 1; 
        console.log("duo n°" + nb_glace + " : " + parfum);

    }


  }


  /////////// Solution Maxime //////////////
//   const sorbets = [
//     "Banane",
//     "Chocolat",
//     "Citron",
//     "Pistache",
//     "Framboise",
//     "Fraise",
//     "Vanille",
//   ];
//   let pairSorbets = "";
//   let intru = [];

//   function showPair() {
//     for (const parfumFirst of sorbets) {
//       for (const parfumSecond of sorbets) {
//         if (
//           (parfumFirst != parfumSecond) &
//           (intru.includes(parfumSecond) == false)
//         ) {
//           pairSorbets += parfumFirst + "/" + parfumSecond + ", ";
//         }
//       }
//       intru.push(parfumFirst);
//     }

//     /*  for (let i = 0; i < sorbets.length; i++) {
//     for (let j = i + 1; j < sorbets.length; j++) {
//       pairSorbets += sorbets[i] + "/" + sorbets[j] + ", ";
//     }
//   } */

//     console.log(pairSorbets);
//   }

//   showPair();
