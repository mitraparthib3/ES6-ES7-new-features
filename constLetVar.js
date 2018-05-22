
//**
//** var

if (true) {
  var x = foo;
}

console.log(x); //Error, undefined

//* execution pattern
// var x;
//
// if (true) {
//   x = 'foo'
// }
//this is called varibale hoisting; also var is function scoped

//** end of var


 //** const
 const foo = 10;
 const foo = 11; //re assigned not posible; Error systax error, already defined

   //some exceptional case where const can be felexible
   const number = [1,2,3];
   number.push(4); //legal operation
   console.log(number); // [1,2,3,4]

   const obj = {
    a: animal,
    b: bird
   };
    obj.c = human; //legal operarion
    console.log(obj); // { a: anumal, b: bird, c: human};

   // end of some exceptional case where const can be felexible

 if (true) {
   const x = foo;
 }

 console.log(x); //reference eror: not defined

 //this does not hoist and const are block scoped

 //**end of const


 //** let
 let foo = 10;
 let foo = 11; //not posible; Error systax error, already defined
 foo = 12;
 console.log(foo); //12


 if (true) {
   let x = foo;
 }

 console.log(x); //reference eror: not defined

 //this does not hoist and let are block scopped

 //**end of let
