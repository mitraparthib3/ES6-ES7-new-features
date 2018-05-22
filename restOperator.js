//Rest operator can be helpfull when number of arguments to function is unknown


function foo(...numbers) {
  console.log(numbers); // [1,2,3,4];
}

foo(1,2,3,4);
