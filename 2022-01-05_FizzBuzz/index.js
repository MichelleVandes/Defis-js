console.log("test");

var result = "";

 
  for (let ii = 0; ii < 100; ii++) {
    result = ii;

    if (ii % 3 == 0)  {result = "Fizz"};
    if (ii % 5 == 0) {result = "Buzz"};
    if (ii % 3 == 0 && ii % 5 == 0)  {result = "FizzBuzz"};

   console.log(result);

     ii = ii ++
    };