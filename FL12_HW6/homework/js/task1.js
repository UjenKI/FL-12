let a = prompt('Enter first number', '');
let b = prompt('Enter second number', '');
let c = prompt('Enter third number', '');
const four = 4;
const two = 2;
if (a === '' || b === '' || c === '') {
    console.log('Invalid input data');
} else if (a === 0 && b === 0 && c === 0) {
    console.log('Invalid input data');
} else if (a === 0 && b === 0) {
    console.log('Invalid input data');
} else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else {
    let d = b * b - four * a * c;
    console.log(d);
    if (d < 0) {
        console.log('No solution, discriminant < 0');
    } else if (d === 0) {
        let x = (-b + Math.sqrt(d)) / (two * a);
        console.log('x = ', x);
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (two * a);
        let x2 = (-b - Math.sqrt(d)) / (two * a);
        console.log('x1 = ', x1);
        console.log('x2 = ', x2);
    } else {
        console.log('Invalid input data!!!');
    }
}
