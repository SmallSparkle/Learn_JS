

console.log("Hello from app.js");

// Data types
undefined;
null;

//boolean
true;
false;

//String
'Hello Word!';
"Hi there";
`Hello again`;

//Symbol
Symbol(01);

//Number - no care what number, BigInt
18
22.4
NaN;

//Object
Object;
massive;
function();
error();

//Variables
const x = 1000 * 5 + 99 - 6;
//is a constanta - we have no plans to change it during the programm execution

let age = 33;
// is changeble; declared once and then modified by calling by name;
age = 34;
age = 35;

var z = 10;
//old version

// variables can store all types of data
// variable's name can contain: A a _ $ 10 numbers can't be first CamelCase agreement

// Math operators

//binar operators: -, +, *, /, %, ** (exponentiation)
//unar operators: -, +
-1;
-0;
+0;
0;
+'2';// 2
+ '2 sas'; // NaN

//concatenate +
'Hello ' + 'World!'; // 'Hello World!'
2 + '2'; // '22'

//increment ++ and decrement --
let b = 5;
++b;// b = b+1
--b; // b = b-1

// +=, -=, *=, /=
let v = 1;
v += 4; // v = v+4
v *= 2; // v = v * 4

// Boolean expressions: >, <, >=, <=, !=, ==. ===

console.log('is 5 > 2', 5 > 2); // true

console.log('is equal: 5 and 5', 5 == 5); // true
console.log('is equal: 5 and 4', 5 == 4); // false

console.log('is equal: 5 and "5"', 5 == '5'); // true !
console.log('is equal: 5 and "5"', 5 === '5'); // false !

console.log('is not equal: 10 and 8', 10 != 8); // true
console.log('is not equal: 10 and "10"', 10 != '10') // false !
console.log('is not equal: 10 and "10"', 10 !== '10') // true

// Conditional operator

// AND && 
1 === 1 && 2 === 2; // true
1 === 1 && 2 === '2'; // false
1 === 1 && 2 === 2 && 3 === 3 && 4 === 4; // true

// OR ||
1 === 2 || 2 === 2; // true
1 === 1 || 2 === 30; // true
1 === 2 || 2 === 3 || 3 === 4 || 4 === 4; // true

1 === 2 || 2 === 3 && 4 === 4; // false && has hig lvl 1 === 2 || (2 === 3 && 4 === 4)
1 === 1 || 2 === 3 && 4 === 4; // true

let age = 26;
if (age >= 18) {
    console.log('Access granted')
} else {
    console.log('Access denided')
};

let salary = 2000;
if (salary > 1500) {
    console.log('Need to improove');
} else if (salary > 3000) {
    console.log('It\'s time to relax');
} else if (salary > 2500) {
    console.log('Well good enought, but I can be better');
} else {
    console.log('Not enought');
};

// switch

let status = 'idel';
 switch (status) {
    case 'idel': {
        console.log('Do nothing');
        break;
    }
    case 'loading': {
        console.log('Data is loading');
        break;
    }
    case 'respond': {
        console.log('We have data');
        break;
    }
    case 'error': {
        console.log('Somthing went wrong');
        break;
    }
    default: {
        console.log('Error');
    }
 }

 // Ternary operator
 const age = 18;

 age >=18 ? console.log('Access granted') : console.log('Access denided');
 console.log('Access ', age >=18 ? 'granted' : 'denided');

 let isAdult = age >= 18 ? true : false;