function carousel_suivant () {


  let myUL = document.getElementsByTagName("img");
  let der_image;
  // alert(myUL);
   for(let i = 0; i<myUL.length; i++) {
     console.log(der_image);

     console.log(i);
     if (myUL[i].className= "active") {

       myUL[i].className = "inactive";
        myUL[i+1].className = "active";
       console.log(myUL[i].className);}
       break;
      
      }

       };
   

