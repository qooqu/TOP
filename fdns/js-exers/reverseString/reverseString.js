const reverseString = function (str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr = newStr + str[str.length - 1 - i];
    }
    return newStr;
}

module.exports = reverseString
