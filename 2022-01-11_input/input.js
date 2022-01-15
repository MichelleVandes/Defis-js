/* console.log("test");*/
let input = ""

function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    input = document.getElementById("in").value;
    // Afficher la valeur

    let circonf = input * 2 * Math.PI
    document.write("La circonférence d'un cercle de " + input + " est " + circonf)
    //alert(circonf)
    ;}


//console.log(new_var);
