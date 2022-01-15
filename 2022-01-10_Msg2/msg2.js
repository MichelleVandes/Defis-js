/* console.log("test");*/

let var_test = "sdfERTwERTdfgERTeERTdfgERTlRTYdfgERTlRTYdfgERT ERTdfgERTdZERdfgERToERTdfgERTnERTdfgERTeERTsdf"


let new_var = var_test.replace(/sdf|ERT|dfg|RTY|ZER/g, "");
//new_var = var_test.replace(/[a-z]{3}|[A-Z]{3}/g, "---");Solution Cloïs
console.log(new_var);
/*console.log(var_test.replace('ERT', ''));*/

