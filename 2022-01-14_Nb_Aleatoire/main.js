/* génère un chiffre aléatoire entre 0 et 100 par exemple
il y a un input dans le quel vous faite une proposition. exemple 35
Si le chiffre choisi par la machine est inférieur un message affiche : "C'est moins"
et inversement : "C'est plus"
Si le chiffre est égale, la machine affiche : "C'est gagné"
vous rajouter également un bouton RESET pour relancer une partie
*/


let Nb_Solution, Proposition;
let texte;
let nb1, nb2 = 0

function GenereAlea() {
  Nb_Solution = parseInt(Math.random() * 100 + 1);
  //même solution que :  let Nb_Solution = Math.floor(Math.random() * (1 + 100) + 1);
  console.log(Nb_Solution);
}

function VerifNombre() {


Proposition = parseInt(document.getElementById("Nb_Propose").value);

//console.log(Nb_Solution);
//console.log(Proposition);

if(Nb_Solution === Proposition){
   texte= "BINGO";
}else{
   if(Nb_Solution < Proposition){
      texte= "Oups, Trop Grand";
}else{
      texte= "Raté, Trop petit"
}
}
document.getElementById("libelle").innerHTML = texte;
}

  


