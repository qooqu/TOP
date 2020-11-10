const sumAll = function (a, b) {
    let sum = 0;
    if (
        Math.min(a, b) < 0 ||
        !Number.isInteger(a) ||
        !Number.isInteger(b)
    ) {
        return 'ERROR';
    } else {
        for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
            sum = sum + i;
        }
        return sum;
    }
}

module.exports = sumAll
