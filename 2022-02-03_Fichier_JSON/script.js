let mon_fic, ma_donnee;

var mon_Fichier = new XMLHttpRequest();
mon_Fichier.open("GET", "test.json");
mon_Fichier.onreadystatechange = function () {
  if (mon_Fichier.readyState === 4) {
    // alert("top1");
    mon_fic = mon_Fichier.responseText;
    alert(mon_fic);
    let madonnee = mon_fic["h1"];
    alert(madonnee);
  }
};
mon_Fichier.send();

// fetch("test.json").then(function (response) {
//   response.text().then(function (text) {
//     poemDisplay.textContent = text;
//   });
// });
