// Il était une fois, à Paris, la ville du romantisme, Bob et Alice se rencontrent et tombent amoureux l'un de l'autre.

// L'amour

// Pour concrétiser leur idylle, ils veulent se rencontrer le plus possible. Ils partagent leurs chemins quotidiens entre les quartiers de Paris pour savoir où ils peuvent se trouver au même endroit.

// Comme vous le savez, il y a 20 arrondissements à Paris :

// {"Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ", "Ⅵ", "Ⅶ", "Ⅷ", "Ⅸ", "Ⅹ", "ⅩⅠ", "ⅩⅡ", "ⅩⅢ", "ⅩⅣ", "ⅩⅤ", "ⅩⅥ", "ⅩⅦ", "ⅩⅧ", "ⅩⅠⅩ", "ⅩⅩ"}

// Codez une fonction nommée love_meet prenant les chemins quotidiens de bob et alice sous forme de deux listes et renvoyant un ensemble de quartiers qu'ils visitent tous les deux dans la journée.

// alice = ['Ⅱ', 'Ⅳ', 'ⅩⅠⅩ', 'ⅩⅤ', 'Ⅳ', 'Ⅱ']
// bob = ['Ⅳ', 'Ⅲ', 'Ⅱ', 'ⅩⅩ', 'Ⅱ', 'ⅩⅩ']

// love_meet(bob, alice)
// retourne {'Ⅱ', 'Ⅳ'}

let alice = ["Ⅱ", "Ⅳ", "XIX", "XV", "Ⅳ", "Ⅱ"];
let bob = ["Ⅳ", "Ⅲ", "Ⅱ", "XX", "Ⅱ", "XX"];

let New_alice = ["Ⅱ", "Ⅳ", "Ⅱ", "XIX", "XV", "Ⅳ", "Ⅲ"];
let New_bob = ["Ⅳ", "Ⅲ", "Ⅱ", "XX", "Ⅱ", "XX"];
let silvester = ["XVⅢ", "XIX", "Ⅲ", "I", "Ⅲ", "XVⅢ"];
let meet_love = [];
let meet_affair = [];

function love_meet(bob, alice) {
  meet_love = [];
  for (let arrond_Alice of alice) {
    for (let arrond_Bob of bob) {
      if (arrond_Alice === arrond_Bob && !meet_love.includes(arrond_Bob)) {

          meet_love.push(arrond_Bob);
      }
    }
  }
  console.log("Rencontre amoureuse love_meet : " + meet_love);
}



// la deuxième partie de l'exercice
// Le temps passe, et l'amour passe...
// broke
// Alice s'ennuie et a le béguin pour le beau et fort Silvester. Afin d'avoir une liaison avec Silvester, elle doit trouver où Silvester et elle vont pendant la journée. Mais pour éviter une rencontre malheureuse avec Bob, elle doit s'assurer que Bob n'y va pas aussi.

// Pour le bien de son nouvel amour, fournissez à Alice la fonction affair_meet qui prend le chemin quotidien de Bob, Alice et Silvestre dans Paris, et retourne un ensemble de tous les endroits où Alice et Silvestre peuvent se rencontrer et être sûrs que Bob n'y sera pas.

// alice = ['Ⅱ', 'Ⅳ', 'Ⅱ', 'ⅩⅠⅩ', 'ⅩⅤ', 'Ⅳ', 'Ⅲ']
// bob = ['Ⅳ', 'Ⅲ', 'Ⅱ', 'ⅩⅩ', 'Ⅱ', 'ⅩⅩ']
// silvester = ['ⅩVⅢ', 'ⅩⅠⅩ', 'Ⅲ', 'Ⅰ', 'Ⅲ', 'ⅩVⅢ']

// affair_meet(bob, alice, silvester)
// retourne {'ⅩⅠⅩ'}


function affair_meet(bob, alice, silvester) {
  love_meet(silvester, New_alice);

  for (let love of meet_love) {
    if (!New_bob.includes(love)) {
      meet_affair.push(love);
    }
  }
   console.log("Rencontre amoureuse en cachette affair_meet : " + meet_affair);
}
