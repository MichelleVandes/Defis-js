let myUL, suivant, precedent, der_image; 

function carousel_suivant() {
  // alert(myUL);
 myUL = document.getElementsByTagName("img");
  suivant = document.getElementById("suivant");
  precedent = document.getElementById("precedent");

  for (let i = 0; i < myUL.length; i++) {
   // console.log(i,myUL.length, suivant.className);

    if ((myUL[i].className == "active")) {
      myUL[i].className = "inactive";
      myUL[i + 1].className = "active";
      precedent.className = "est_visible";

      console.log(i, myUL.length);
      if (i+1== myUL.length -1) { 
       // console.log("top1")
        suivant.className = "est_invisible";}
       break;
    }
   
  }
}

function carousel_precedent() {
  myUL = document.getElementsByTagName("img");
  suivant = document.getElementById("suivant");
  precedent = document.getElementById("precedent");

  for (let i = myUL.length-1; i > 0; i--) {
    console.log(i, myUL[i]);

    if (myUL[i].className == "active") {
      myUL[i].className = "inactive";
      myUL[i  -1].className = "active";
      precedent.className = "est_visible";
    console.log(i, myUL.length);
    if (i - 2 < myUL.length ) {
      console.log("top2", i);
      suivant.className = "est_visible";
    }
    if (i === 1) {
      console.log("top3", i);
      precedent.className = "est_invisible";
    }
      break;
    }
  }
}
