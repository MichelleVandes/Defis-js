/* Exercice N°1 :
fonction qui prend en argument un nombre
la fonction retourne les nombres par les-quelles l'argument est divisible
*/

 let masolution = "";
 let  diviseur;


function queldiviseur(nbr) {
   let nombre = parseInt(nbr);
 

  for (let diviseur = nombre; diviseur > 0; diviseur--) {
   
    if (nombre % diviseur == 0) {
      masolution += diviseur + ", ";
    }
  }
  let texte_soluce = "Voici les nombres par lequel " +  nbr + " est divisible " + masolution;

  soluce1.innerHTML = texte_soluce
}
num % incre