// array destructuring 

const [x, y] = [4345,6757];
console.log(x,y);

const numbers = [46546,5,76];
const [a, b, c] = numbers;
console.log(a,b,c);

function boxify(num1, num2, num3){
    const array = [num1, num2, num3];
    return array;
}

console.log(boxify(24,45,65));

const [firstNum, secondNum] = boxify(436,65,7);
console.log(firstNum, secondNum);

const person = {
    name: 'aal emraan',
    age: 23,
    hobbies: ['playing various games','drawing', 'walking', 'watching movies']
}

const [firstHobby, secondHobby, thirdHobby, fourthHobby] = person.hobbies;
console.log(firstHobby,secondHobby)

// object destructuring

const person2 = {
    name: 'aal',
    age: 23,
    designation: 'web developer',
    hobbies: ['dancing', 'playing cricket', 'gym'],
    machine: {
        name: 'personal computer',
        size: 'micro atx',
        display: '24 inche nova tv',
        specification: {
            processor: 'core i3 2nd generation',
            ram: '4gb',
            hdd: '500gb',
            keyboard: 'a4tech'
        }

    }
}

const {name, age} = person2;
const {processor, ram,keyboard} = person2.machine.specification;
const [first, second, third] = person2.hobbies;
console.log(first, second, third)
console.log(name, age)
console.log(processor, ram, keyboard)