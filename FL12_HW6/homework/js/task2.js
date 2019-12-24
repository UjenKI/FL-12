let a = prompt('Enter first number', '');
let b = prompt('Enter second number', '');
let c = prompt('Enter third number', '');

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

if (b === '' || c === '') {
    console.log('Input values should be only numbers');
} else if (a === 0 || b === 0 || c === 0) {
    console.log('A triangle must have 3 sides with a positive definite length');
} else if (a + b < c || a + c < b || b + c < a) {
    console.log('Triangle doesn’t exist');
} else if (a === b && b === c) {
    console.log('Equivalent (every side is equal).');
} else if (a === b || b === c || c === a) {
    console.log('Isosceles (two sides are equal).');
} else {
    console.log('Scalene (no sides are equal)');
}