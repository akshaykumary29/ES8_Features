// String padding (padStart() and padEnd())

// padStart :- adds at the Start

let str = '1234'.padStart(8,'0');
console.log(str); // "00001234"


let str = 'abc'.padStart(5);
console.log(str); // "  abc" 

let user = 'Bob';
console.log(user.padStart(10));

//-------------------------------------------

// padEnd() :- add at the End

let str = 'abc'.padEnd(5);
console.log(str); // "abc  "

str = 'abc'.padEnd(5,'*');
console.log(str); // "abc**"

