const products = [
    {name: 'laptop', price: 243, brand: 'lenove', color: 'ocean blue'},
    {name: 'iPhone', price: 2343, brand: 'apple', color: 'light gold'},
    {name: 'watch', price: 3243, brand: 'rolex', color: 'silver'},
    {name: 'sunglass', price: 443, brand: 'ribon', color: 'black'},
    {name: 'sneaker', price: 643, brand: 'nike', color: 'red'},
    {name: 'keyboard', price: 2403, brand: 'redragon', color: 'metalic'}

]

const brands = products.map(product => product.brand);
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);
const colors = products.map(p => p.color);
console.log(colors)

products.forEach(p => console.log(p))
const color = products.forEach(p => console.log(p.color))
// const color = products.forEach(p => p.color) forEach doesn't return anything
console.log(color)

// filter
// filter will return everything matched with the condition with array

const expensiveProducts = products.filter(product => product.price > 1000);
console.log(expensiveProducts);

const specificNames = products.filter(p => p.name.includes('n'));
console.log(specificNames)

// find
// find will return only the first one matched with the given condition with  object
const word = 'p'
const special = products.find(product => product.name.includes(word));
console.log(special)