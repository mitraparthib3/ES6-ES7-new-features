/**
 * JS Map() object
 * holds `key` and `value` pair like object and many more
 */

/**
 * basic usage
 */

myMap = new Map();

// output : Map(0) {}
// size: (...)
// __proto__: Map
// [[Entries]]: Array(0)
// length: 0

/**
 * adding `key` and `value`
 */

myMap.set("foo", "bar");
//output: size: 1
// __proto__: Map
// [[Entries]]: Array(1)
// 0: {"foo" => "bar"}
// key: "foo"
// value: "bar"
// length: 1

/**
 * array like built-in size
 */

myMap.size(); //output: 1

/**
 * reading value with key
 */

myMap.get("foo"); //output: bar
myMap.get("unknownKey"); //output: undefined

//another method which returns boolean if value exsits for key
myMap.has("foo"); //output: true
myMap.has("unknownKey"); //output: false

/**
 * etarable capability
 */

myMap.forEach((value, key) => {
  console.log(value, key);
}); //remenber (value, key)

//Output: bar foo

/**
 * Maps can be merged
 * last unique key will win
 */

const myMap = new Map(["foo", "bar"], ["fizz", "bizz"]); //another way of assign an Map
const myAnotherMap = new Map(["foo", "updatedBar"]);

const mergedMap = new Map([...myMap, ...myAnotherMap]);
//output: Map(2) {"foo" => "newBar", "fizz" => "bizz"}

/**
 * Array <--> Map
 */

const kvArray = [["key1", "value1"], ["key2", "value2"]];
const arrToMap = new Map(kvArray); //output: Map(2) {"key1" => "value1", "key2" => "value2"}

const mapToArr = Array.from(arrToMap); //output: [['key1', 'value1'], ['key2', 'value2']];
