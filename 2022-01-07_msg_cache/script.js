


let chaine_test = "&éæù¨€´b&œ'´&œ)´\\{¡ˇð ̵}…œ&àçr)àçæù¨…}…€a\\¿††µ{©þß®}…(-)vþß®à_-o"
let alpha = "abcdefghijklmnopqrstuvwxyz"


let soluce = ""


/*for ([expressionInitiale]; [condition]; [expressionIncrément]) {instruction }*/

  for (let i = 0; i < chaine_test.length ; i++) 
    {
        let var_test = chaine_test[i]    
        let index = alpha.indexOf(var_test );    

        if(index !== -1){
       
          soluce += var_test;
          
        } ;};
        console.log(soluce);
        alert(soluce);