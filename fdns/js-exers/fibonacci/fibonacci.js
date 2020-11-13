const fibonacci = function (seq) {
    if (seq < 0) {
        return 'OOPS';
    }
    let fib = [0, 1];
    if (seq >= fib.length) {
        for (let i = 2; i <= seq; i++) {
            fib.push(fib[i - 2] + fib[i - 1]);
        }
    }
    return fib[seq];
}

module.exports = fibonacci
