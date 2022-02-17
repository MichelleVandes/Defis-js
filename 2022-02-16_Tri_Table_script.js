// Ecrivez une fonction sort_a_list qui prend une liste comme argument et retourne la liste triée dans l'ordre décroissant, comme :
// >> sort_a_list([1, 3, 2, 4, 6, 5, 9, 7])
// [9, 7, 6, 5, 4, 3, 2, 1]

// tri_num_inv(a, b, c, d, e, f, g, h) {
//   return x - y;
// }
function sort_a_list() {
  var nombres = new Array(1, 3, 2, 4, 100, 6, 5, 9, 7);
  nombres.sort(compare);
  alert(nombres);
  // en condensé :
  // nombres.sort(function compare(x, y) {
  //   return y - x; // y - x => décroissant; x - y => croissant
  // });
  // alert(nombres);
}
 function compare(x, y) {
   return y - x; // y - x => décroissant; x - y => croissant
 }

// 2ème exercice :
// selon une liste où chaque élément est une paire composée d'une note et d'un nom d'étudiant, comme suit :
// >> ma_classe = [[85, 'Susan Maddox'], [6, 'Joshua Tran'], [37, 'Jeanette Wafer']]
// Ecrivez une fonction nommée sort_by_mark qui prend en argument une liste similaire et la retourne triée par marque dans l'ordre décroissant. Par exemple :
// >> sort_by_mark(ma_classe)
// [[85, 'Susan Maddox'], [37, 'Jeanette Wafer'], [6, 'Joshua Tran']]
// Suite du défi
function sort_by_mark() {
  let ma_classe = [
    [37, "Jeanette Wafer"],
    [6, "Joshua Tran"],
    [85, "Susan Maddox"],
  ];

  ma_classe.sort(function compare(a, b) {
    return b[0] - a[0];
  });

  console.log(ma_classe);
};

// 3ème exercice :
// Ecrivez une fonction nommée sort_by_name qui prend en argument une liste similaire et la retourne triée par nom dans l'ordre croissant, comme :
// >> sort_by_name(ma_classe)
// [[37, 'Jeanette Wafer'], [6, 'Joshua Tran'], [85, 'Susan Maddox']]

function sort_by_name() {
let ma_classe = [
  [37, "Jeanette Wafer"],
  [22, "Aoshua Tran"],
  [85, "Susan Maddox"],
];
  let edition = ma_classe.sort(function localeCompare(a, b) {
    return a[0] - b[0];
  });

  console.log(edition);
};