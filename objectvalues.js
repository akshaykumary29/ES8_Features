// Object.values() 
// returns an array of the objects values.

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.values(object1));
output: [ 'somestring', 42, false ]

// Array-like object
const arrayLikeObj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(arrayLikeObj1 )); // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 50: 'a', 4: 'b', 8: 'c' };
console.log(Object.values(arrayLikeObj2 )); // ['b', 'c', 'a']

//
let user = {
    name: "John",
    age: 30
  };
  
  // loop over values
  for (let value of Object.values(user)) {
    console.log(value); // John, then 30
  }


// using function

const sales = {
    john: 30,
    Rob: 40,
    Pete: 55,
    Mary: 35
};

function sumSales(obj) {
    let sum = 0;
    for (const value of Object.values(obj)) {
        sum += value;
    }

    return sum;
}

console.log(sumSales(sales)); // 160