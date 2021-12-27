// Trailing commas

const a = {
    fname: 'abc',
    sname: 'xyz',
    age: 20,
}
console.log(a);
// output: { fname: 'abc', sname: 'xyz', age: 20 }

const b = [1,2,3,];
console.log(b); // [1, 2, 3]

let c = (x,) => console.log(x);
c(2); // 2