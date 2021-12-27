// Object.entries()
// returns an array of [key, value] pairs

const sales = {
    john: 30,
    Rob: 40,
    Pete: 55,
    Mary: 35
};
console.log(Object.entries(sales));

// using function
const sales = {
    john: 30,
    Rob: 40,
    Pete: 55,
    Mary: 35
};

function personSales(obj) {
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value} sales`);
    }
}

personSales(sales);