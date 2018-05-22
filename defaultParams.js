//default parametrs are usefull to hardcode default value, which can be overwrite by passing the objectEntriesKeyValuesAssign


const person = (firstName, lastName, cell, middleName='empty') => {
  //default parameters should be last- good code practice
  console.log(firstName, middleName);
}

person('Pat, 'Mitter', 777); //Pat empty
person('Joe', 'Miller', 888, 'Jr.') //Joe Jr.
