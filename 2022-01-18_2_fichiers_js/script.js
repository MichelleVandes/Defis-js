
//console.log(sentence);


let soluce = "";

/*for ([expressionInitiale]; [condition]; [expressionIncrément]) {instruction }*/

for (let ii = 0; ii < sentence.length; ii++) {
var str = "AbcDEFgH";

if (
  sentence[ii].match(/[a-z]/) &&
  sentence[ii + 1].match(/[A-Z]/) &&
  sentence[ii + 2].match(/[A-Z]/) &&
  sentence[ii + 3].match(/[A-Z]/) &&
  sentence[ii + 4].match(/[a-z]/) &&
  sentence[ii + 5].match(/[A-Z]/) &&
  sentence[ii + 6].match(/[A-Z]/) &&
  sentence[ii + 7].match(/[A-Z]/) &&
  sentence[ii + 8].match(/[a-z]/)
) {
  soluce += sentence[ii + 4];
  
  //console.log(ii);
  //console.log(soluce);
}
  
} ;


console.log(soluce);

