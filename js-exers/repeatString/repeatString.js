const repeatString = function (str, num) {
    let newStr = '';
    if (num < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < num; i++) {
            newStr = newStr + str;
        }
        return newStr;
    }
}

module.exports = repeatString
