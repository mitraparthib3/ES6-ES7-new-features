//new way of chaing promises, clean code

  //old way
const fetchAccounts = (url, ...args) => {
  fetch(url)
  .then(res => res.json())
  .then(dataInJson => {
    console.log(dataInJson);
    return dataInJson;
  });
}

//new way
const fetchAccounts = async (url, ...args) => {
  const response = await fetch(url);
  const dataInJson = await response.json();
  console.log(dataInJson);
};

//async function fetchAccounts(url, ..args) {
//const response = await fetch(url);
// const dataInJson = await response.json();
// console.log(dataInJson);
//}
