

// const formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD'
// });

// const result = formatter.format(2500);
// console.log(result);


const number = 1234.5678
const result = '$ ' + number.toFixed(2);
console.log(result);