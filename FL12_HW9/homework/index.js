const f = 30;
const two = 2;
const ten = 10;
// Task-1
function converter() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            arguments[i] = Number(arguments[i]);
        } else {
            arguments[i] = String(arguments[i]);
        }
        arr.push(arguments[i]);
    }
    return arr;
}
converter(1, 3, '4', 4, '7');

// Task-2
function executeforEach(arr, func) {
    for (let i of arr) {
        func(i);
    }
}
executeforEach([1, 2, 3], function (el) {
    console.log(el * 2)
});
// Task-3
function mapArray(arr, callback) {
    let res = [];
    executeforEach(arr, function (el) {
        res.push(callback(Number(el)));
    })
    return res;
}
mapArray([2, '5', 8], function (el) {
    return el + 3
});
// Task-4
function filterArray(arr, callback) {
    let filt = [];
    let rslt = [];
    executeforEach(arr, function (el) {
        filt.push(callback(Number(el)));
    })
    for (let i = 0; i < filt.length; i++) {
        if (filt[i]) {
            rslt.push(arr[i]);
        }
    }
    return rslt;
}
filterArray([2, 5, 8], function (el) {
    return el % 2 === 0
});
// Task-5
function flipOver(str) {
    let reS = '';
    for (let i = 1; i < str.length + 1; i++) {
        reS += str[str.length - i]
    }
    return reS;
}
flipOver('hey world');
// Task-6
function makeListFromRange(rng) {
    let ar = [],
        begin = rng[0],
        finish = rng[1];
    for (let i = begin; i <= finish; i++) {
        ar.push(i);
    }
    return ar;
}
makeListFromRange([2, 7]);
// Task-7
function getArrayOfKeys(arr, prop) {
    let result = [];
    executeforEach(arr, function (el) {
        result.push(el[prop]);
    });
    return result;
}
const actors = [
    {
        name: 'tommy',
        age: 36
    },
    {
        name: 'lee',
        age: 28
    }
];
console.log(getArrayOfKeys(actors, 'name'));
// Task-8
function substitute(arr) {

    return mapArray(arr, function (el) {
        if (el < f) {
            return '*';
        }
        return el;
    });
}
console.log(substitute([58, 14, 48, 2, 41, 49]));
// Task-9
function getPastDay(date, passD) {
    const milscDay = 86400000;
    return new Date(date - milscDay * passD).getDate();
}
const date = new Date(f, 0, two);
getPastDay(date, two);
// Task-10
function formatDate(date) {
    let year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hours = date.getHours() < ten ? `0${date.getHours()}` : date.getHours(),
        minutes = date.getMinutes() < ten ? `0${date.getMinutes()}` : date.getMinutes();
    return `${year}/${month}/${day} ${hours}:${minutes}`;
}
formatDate(new Date('6/15/2018 09:15:00'));




