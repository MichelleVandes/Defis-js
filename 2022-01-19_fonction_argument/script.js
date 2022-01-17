/* Exercice N°1 :
un petit exercice simple
sur une suite de chiffre de 0 à 10 afficher moi uniquement les chiffres pairs
e veux que la fonction marche que vous commenciez à partir de 0 ou à partir de 1
*/
function plus_deux(nbr) {
  let masolution = ""

  let nombre = parseInt(nbr)
  let reste = 0;
  reste = nombre % 2;
  if(reste > 0)
    {nombre += 1;}
    else
    {nombre += 2;}


  for (let ii = 0; ii < 10; ii++) {
     masolution += nombre + ", ";
    nombre += 2;
  }
  let texte_soluce = "Voici les 10 prochains nombres pairs:" +    masolution;
  console.log("Voici les 10 prochains nombres :", masolution); 

  soluce1.innerHTML = texte_soluce
}


/* Exercice N°2 :
créé une fonction qui prend en argument un nombre
Cette fonction retournera le nombre de fois que ce nombre peut-être divisible par 2 pourvu que ça reste un entier évidemment
exemple 76 renverra 2;*/

function reste(nombre) {
  let quo = 0;
  let rem = 0;
  let resultat = 0;

 // console.log(quo, rem);

  while (quo == 0) {
    quo = ~~(nombre / 2);
    console.log(quo)
    rem = nombre % 2;
    console.log(quo, rem);

    if (rem == 0) {
      resultat += 1;
    }
  }
let texte_soluce2 = nombre +  " est divisible fois " + resultat + " par 2";
  console.log(nombre, " est divisible ", resultat, " fois par 2");
   soluce2.innerHTML = texte_soluce2;
}
//console.log(new_var);
