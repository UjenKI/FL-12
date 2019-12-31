function makeNumber(str) {
    let arrStr = [];
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i]) === false) {
            arrStr.push(arr[i]);
        }
    }
    return arrStr.join('');
}
function countNumbers(str) {
    let res = {};
    makeNumber(str).split('').forEach(function (a) {
        if (res[a] !== undefined) {
            ++res[a];
        } else {
            res[a] = 1;
        }
    });
    return res;
}
countNumbers('jhvb34hj5hjb5354uy3b');