//destructuring of object is nice features which keps code clean

const person = {
  first: 'Pat',
  last: 'Mitter',
  cell: '777'
};

const { first, last, cell} = person;
//const { last, first, cell } = person; //line 10 and 11 are same; object destructuring does not follow order :)
console.log(first); //Pat

//we can add rename a key

const { first: FN, last, cell } = person;
console.log(FN, cell); //Pat 777
