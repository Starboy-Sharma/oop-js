/*
 * When a Variable is declared, the JS Compiler do things for:
 * var - it will define our variable as a global object
 * Note: - You can also access variables declare with var as window.var_name
 * let & const - Compiler defines variable in their scope instead of global object
 */

console.log('1a', myName1); // undefined
if (1) {
 console.log('1b', myName1); // undefined
 var myName1 = 'Pankaj Sharma';
}
console.log('2a', myName2); // error: myName2 is not defined
if (1) {
    console.log('2b', myName2); // undefined
    let myName2 = 'Pankaj Sharma';
}
console.log('3a', myName3); // error: myName3 is not defined
if (1) {
    console.log('3b', myName3); // undefined
    const myName3 = 'Pankaj Sharma';
}
