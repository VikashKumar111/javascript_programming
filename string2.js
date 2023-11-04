

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

const result = formatter.format(2500);
console.log(result);
