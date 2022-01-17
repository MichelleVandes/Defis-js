

// Récupérer le plus grand nombre de ce tableau :
let ii = 0
let i = 0

let table = [651041, 926030, 510359, 172306, 776864, 324938, 992008, 981900]
let leplussgrand  = ""
// Récupération occurence du tableau

let sequence = table.length
console.log(sequence)

 for (let increment = 0; increment < sequence - 1; increment++) 
 {
     if (parseInt(table[increment])    > parseInt(table[increment + 1]))
      { 
          leplussgrand  = parseInt(table[increment]); 
         // document.write(leplussgrand);
          
      };
 }
console.log(leplussgrand);


// Méthode Aicha

/*let arr = [651041, 926030, 510359, 172306, 776864, 324938, 992008, 981900];
let max = Math.max(...arr);
});*/

