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

makeNumber('jhvb34hj5hjb5354uy3b');