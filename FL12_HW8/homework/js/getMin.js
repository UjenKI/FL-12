function getMin() {
    let minNumb = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < minNumb) {
            minNumb = arguments[i];
        }
    }
    return minNumb;
}

getMin(1, 4, 2, 4, 5, 9);
