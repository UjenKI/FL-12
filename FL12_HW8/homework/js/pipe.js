function addTwo(a) {
    return a + 2;
}

function pipe(b, ...args) {
    for (let i = 0; i < args.length; i++) {
        b = args[i](b);
    }
    return b;
}

pipe(1, addTwo);
pipe(1, addTwo, addTwo);