//spread concatinate two objects or array
//array
const boy = ['Pat', 'Mitter', 777];

const person = ['Mr.', ...boy];

console.log(person);// ['Mr.', 'Pat', 'Mitter', 777]

//object
const person = {
  first: 'Pat',
  last: 'Mitter',
  cell: '777'
};

const person = {...person, sex: 'Male'};

console.log(person); // {first: 'Pat', last: 'Mitter', cell: '777', sex: 'Male'}
