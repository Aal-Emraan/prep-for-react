const numbers = [4,4,65,6,57,6,7,7]
const person = {
    name: 'aal emraan',
    age: 23,
    hobbies: ['playing various games','drawing', 'walking', 'watching movies']
}

const info = `this is ${person.name}. his age is ${person.age} and one of his hobbies is ${person.hobbies[0]}. he has an excillent number which is ${numbers[2]}`;
console.log(info);

// array functions
const sum = (num1, num2) => num1 + num2;
const sub = (x, y) => Math.abs(x - y);
const name = name => name;
const year = () => 2021;

console.log(sum(1,3));
console.log(sub(1,3));
console.log(name('aal emraan'));
console.log(year());


// spread operators
const array = numbers;
const newArray = [...numbers,2,4,565,6,65];
console.log(newArray);
numbers.push(34)
console.log(array)