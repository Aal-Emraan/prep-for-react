let name;
name = 'aal emraan';
console.log(name)

// object 
//  3 ways to access object property

const info = {
    name: 'shakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan', 'number one shakib khan']
}

console.log(info.name) // access via property
console.log(info['age']) // access via string
const param = 'age';
console.log(info[param]) // access via variable
