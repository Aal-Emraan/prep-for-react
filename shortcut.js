// '', 0, false, undifined, null are all false

// check truthy in shortcut way...

let myVar = 10;
if(myVar){
    myVar = 'I am truthy'
}else{
    myVar = 'I am falsy'
}
console.log(myVar);

// check falsy in shortcut way...

if(!myVar){
    myVar = 'I am truthy'
}else{
    myVar = 'I am falsy'
}
console.log(myVar);

// ternary way...
const money = 800;
const food = money>100 ? 'biriyani' : 'cha biscuit';
console.log(food)


/* if(money > 100){
    food = 'biriani'
}else{
    food = 'cha biscuit'
}

console.log(food) */

// make a number into a string...
const num = 10;
const numStr = num + '';
console.log(numStr);

// shortcut to make a string to a number...
const price = '500';
const priceNum = +price;
console.log(priceNum);

//------------------------------

const isActive = false;
const showUser = () => console.log('display user.');
const hideUser = () => console.log('hide user.');
isActive? showUser(): hideUser();

isActive && showUser();
// isActive || hideUser();

// revarse a value of a variable shortcut...

let name = true;
console.log(name)
name = !name;
console.log(name)