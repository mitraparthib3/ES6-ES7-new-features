//arrow function is new addition to JS

// old way
// function foo(...numbers) {
//   console.log(numbers); // [1,2,3,4];
// }

const foo = (..numbers) => {
  console.log(numbers);
}

const add = (...numbers) = {
  return numbers.reduce((prev,next) => 
    prev + next;
  ) //no return neede for single line
};
