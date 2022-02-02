const table_multiplication = [1, 5, 10, 55, 64]
const longueur_table = table_multiplication.length 

let resultat = table_multiplication[0]; 

console.log("Avec for :");
    for ( let i=1; i < longueur_table; i++) {
        resultat *= table_multiplication[i] 
    }
     console.log(resultat);


console.log("Avec for in :")
resultat = 1;
    for (let zz in table_multiplication) {
        resultat *= table_multiplication[zz];
    }
      console.log(resultat); 
