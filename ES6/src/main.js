//CLASS
class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countUsers(){
        console.log('There are 50 users');
    }

    register(){
        console.log(this.username+ ' is now registered');
    }
}

// let bob = new User('bob', 'bob@gmail.com', '21412ssa1');
// bob.register();
//
// User.countUsers();

class Member extends User{
    constructor(username, email, password, memberPackage ){
        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage(){
        console.log(this.username+' is subscribed to the '+this.package+' package');
    }
}

let mike = new Member('mike','mike@hotmail.com','1221214','"Standard"');
mike.getPackage();
// mike.register();

// TEMPLATE
let name = 'John';
let lastName = "Doe";
function makeUppercase(word) {
    return word.toUpperCase();
}

let template = `
<h1>${makeUppercase('Hello')}, ${name.toUpperCase()} ${lastName}</h1>
<p>This is a simple template in JavaScript</p>
`;

document.getElementById('template').innerHTML = template;

// New String & Number Methods

// let theString = 'Hello, my name is Sergey and I love JavaScript';

// startWith();
// endsWith();
// includes();

// console.log(theString.startsWith('Hello'));
// console.log(theString.endsWith('JavaScript'));
// console.log(theString.includes('name'));

// // Hex - ES5
// console.log(0xFF);
// // Binary - ES6 support
// console.log(0b101011);
// // Octal
// console.log(0o543);

// console.log(Number.isFinite(NaN));
// console.log(Number.isNaN('string'));
// console.log(Number.isInteger(2));

//Default Params & Spread Operator

// Default Params
function greet($greeting = 'Hello World') {
    console.log($greeting);
}
greet();


// ES5
// var args = [1,2,3];
//
// function test(){
//     console.log(args);
// }
//
// test.apply(null, args);
// Spread Operator
let args1 = [1,2,3];
let args2 =[4,5,6];
function test(){
    console.log(args1+','+args2);
}

test(...args1,...args2);

//Set, Map, WeakSet and WeakMap

// Set
// let myArray = ['JS',33,55];
// let mySet = new Set(myArray);
//
// mySet.add('100');
// mySet.add({a:1, b:2});
// mySet.delete(33);
// mySet.clear();

// console.log(mySet);
// console.log(mySet.size);
//
// mySet.forEach(function (val) {
//     console.log(val);
// });

// Map
//
// let myMap = new Map([['a1','Hello'],['b2','Goodbye']]);
// myMap.set('c3','Foo');
// myMap.delete('a1');
//
// console.log(myMap);

// WeakSet

// let carWeakSet = new WeakSet();
//
// let car1 = {
//     make: 'Honda',
//     model: 'Civic'
// };
// carWeakSet.add(car1);
//
// let car2 = {
//     make: 'Dodge',
//     model: 'Ram'
// };
// carWeakSet.add(car2);
//
// carWeakSet.delete(car1);
//
// console.log(carWeakSet);

// WeakMap

// let carWeakMap = new WeakMap();
//
// let key1 = {
//     id: 1
// };
//
// let car1 = {
//     make: 'Dodge',
//     model: 'Ram'
// };
//
// carWeakMap.set(key1, car1);
// // carWeakMap.delete(key1);
// console.log(carWeakMap);

// Arrow Functions

// let add = function (a,b) {
//     let sum = a+b;
//     console.log(sum);
//     return false;
// };
//
// let add = (a,b)=>{
//     let sum = a+b;
//     console.log(sum);
//     return false;
// };
// add(2,2);

// Promises

// Immediately Resolved Promise

let myPromise = Promise.resolve('Foo');

myPromise.then((resolve) => console.log(resolve));