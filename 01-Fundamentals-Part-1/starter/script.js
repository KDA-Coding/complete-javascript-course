/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

let firstName = 'Jonas';

console.log(firstName);
console.log(23);

let javascriptIsFun = true;

console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 24);
// console.log(typeof 'Jonas');

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;

console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

//Bug in JavaScript. Not corrected for Legacy reasons. Should return 'null' but returns 'object'
console.log(typeof null);



let age = 30;
age = 31;

const birthYear = 1990;
birthYear = 1991;

*/

/*
let age = 30;
age =  31;

const birthYear = 1998;
// birthYear = 1997;

// const job; 

var job = 'programmer';
job = 'game developer';

lastName = 'Schmedtman';
console.log(lastName);


const now = 2023;

const ageKirk = now - 1998;
const ageSarah = now - 2002;

console.log(ageSarah, ageKirk);

console.log(ageKirk * 2, ageKirk / 10, 2 ** 3 );

const firstName = 'Kirk';
const lastName = 'Allgeyer';
console.log(firstName + lastName);
*/


// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2* 2 = 8

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x + 1
x--; //x = x - 1
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);