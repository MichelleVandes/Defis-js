let mon_fic, mon_fic_propose, ma_donnee;


// Fichier json par défaut, à l'initialisation de l'écran
 console.log(mon_fic);
if (mon_fic == undefined) {
  mon_fic = "FR.json";
  console.log("top 1");

  remplir_zone(mon_fic);
}

// Changement de Langue
function chgt() {
  remplir_zone(mon_fic_propose);
}

// Remplissage des zones de l'écran
function remplir_zone(mon_fic) {
console.log(mon_fic);

fetch(mon_fic).then(function (response) {
  response.json().then(function (data) {
    console.log(data.h1);

    ma_donnee = document.getElementById("titre_h1");
    ma_donnee.innerHTML = data.h1;

    ma_donnee = document.getElementById("titre_h2");
    ma_donnee.innerHTML = data.h2;

    ma_donnee = document.getElementById("Lg_propose");
    ma_donnee.innerHTML = data.Lg_propose;

    ma_donnee = document.getElementById("Lg_propose");
    mon_fic_propose = data.Fic_Json_propose;
  });
});
}