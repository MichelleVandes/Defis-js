 /*  Création de 4 fonctions 
     - res_plus()  calcul de l'addition
     - res_moins() cacul de la soustraction
     - recup_chiffres() qui récupère la saisie des 2 zones
     - mon_resultat(total) qui écrit le résultat à l'écran
     */

     

let chiffre1, chiffre2, total = 0;
let libelle_resul = "";

function res_plus() {
  //alert("coucou")

  total = parseInt(document.getElementById("ch1").value) + parseInt(document.getElementById("ch2").value);
 
  libelle_resul = document.getElementById("libelle"); 
  libelle_resul.innerHTML = "Le resultat est " + total; 
  
    }; 

    function res_moins() {
           
    total = parseInt(document.getElementById("ch1").value) - parseInt(document.getElementById("ch2").value);
    libelle_resul = document.getElementById("libelle");
    libelle_resul.innerHTML = "Le resultat est " + total; 
    }

