/* Exercice N°1 :
fonction qui prend en argument un nombre
la fonction retourne les nombres par les-quelles l'argument est divisible
*/

function queldiviseur(nbr) {
  
  let masolution = ""

  let nombre = parseInt(nbr)
  let reste, diviseur




  for (let diviseur = nombre; diviseur > 0; diviseur--) {
    reste = nombre % diviseur;
    console.log(reste, diviseur); 
    if (reste == 0) {
      masolution += diviseur + ", ";
    }
  }
  let texte_soluce = "Voici les nombres par lequel:" +  nbr + " est divisible " + masolution;
  console.log(
    "Voici les nombres par lequel:" + nbr + " est divisible " + masolution
  ); 

  soluce1.innerHTML = texte_soluce
}
