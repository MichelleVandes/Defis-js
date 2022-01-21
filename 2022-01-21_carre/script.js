
// Exercice 1 : ok un exercice simple: générer une suite de nombre de 0 à 10 et afficher leur carré
    let Nb_occurence, ii = 0;
    let table_resultat = [];

function carre() {

  for (ii = 0; ii < 11 ; ii++) 
    {
     
        //  table_resultat[ii]  = ii * ii;
    table_resultat.push(ii*ii);
         };

        console.log(table_resultat);
 };
    

// Exercice 2 : En mathématiques, la suite de Fibonacci est une suite de nombres entiers dont chaque terme successif représente la somme des deux termes précédents, et qui commence par 0 puis 1. Ainsi, les dix premiers termes qui la composent sont 0, 1, 1, 2, 3, 5, 8, 13, 21 et 34.  Cette suite à la logique simple est considérée comme le tout premier modèle mathématique en dynamique des populations.

function Fibonacci(Nb_occurence) {

table_resultat = []
// Nb_occurence = 15;

    for(ii = 0; ii < Nb_occurence; ii++ ) {

        if (ii < 2) { table_resultat[ii]  = ii;}
    
    else {
         table_resultat[ii]  =  table_resultat[ii -1] + table_resultat[ii -2];
    }
    };
       console.log(table_resultat);
};