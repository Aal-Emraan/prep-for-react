const person = {
    name: 'aal emraan',
    age: 23,
    hobbies: ['playing various games','drawing', 'walking', 'watching movies']
}

const stringified = JSON.stringify(person);
console.log(stringified);
const obj = JSON.parse(stringified);
console.log(obj);

// fetch

/* fetch('url')
.then(res => res.json())
.then(data => console.log(data)) */

const objKeys = Object.keys(person);
console.log(objKeys);
const objValues = Object.values(person);
console.log(objValues);

const array = [34,5,6,7,6,87,8,78];
array.forEach(num => console.log(num));


const products = [
    {name: 'laptop', price: 243, brand: 'lenove', color: 'ocean blue'},
    {name: 'iPhone', price: 2343, brand: 'apple', color: 'light gold'},
    {name: 'watch', price: 3243, brand: 'rolex', color: 'silver'},
    {name: 'sunglass', price: 443, brand: 'ribon', color: 'black'},
    {name: 'sneaker', price: 643, brand: 'nike', color: 'red'},
    {name: 'keyboard', price: 2403, brand: 'redragon', color: 'metalic'}

]

const newObject = {name: 'dog', price: 435, brand: 'Australian', color: 'brown'};

const newProducts = [...products, newObject];
console.log(newProducts);

const newArray = newProducts.filter(obj => obj.name !== 'watch');
console.log(newArray)