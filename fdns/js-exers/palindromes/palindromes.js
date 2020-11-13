const palindromes = function (str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, ""); // removes punctuation and spaces
    str = str.toLowerCase();
    console.log(str);
    for (let i = 0; i <= Math.floor(str.length / 2); i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

module.exports = palindromes