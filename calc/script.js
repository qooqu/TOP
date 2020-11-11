// create layout

const divCalc = document.getElementById('calc');

let display = document.createElement('div');
display.id = 'display';
display.style.background = 'lightgrey';
display.style.display = 'flex';
display.style.justifyContent = 'flex-end';
display.style.alignItems = 'center';
display.style.padding = '0 20px 0 20px';
display.style.fontFamily = 'Montserrat';
divCalc.appendChild(display);

let buttonArray = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 'C', 0, '.', '/', '=', '+/-'];
buttonArray.forEach(ele => {
    let btn = document.createElement('button');
    btn.id = ele;
    btn.style.width = '100%';
    btn.style.height = '100%';
    btn.style.background = 'lightblue';
    btn.style.display = 'flex';
    btn.style.justifyContent = 'center';
    btn.style.alignItems = 'center';
    btn.style.fontFamily = 'Montserrat';
    btn.addEventListener('click', handleClick);
    btn.textContent = ele;
    divCalc.appendChild(btn);
});

display.style.gridColumn = '1 / span 4';
document.getElementById('=').style.gridColumn = '1 / span 3';

// functionality

// keep track of
// running value
let stored = null;
// operator to be applied ... when user clicks an oper, the previous oper is executed
let prevOper = null;
// was the previous click on a number or an operator
let prevClick = null;

// checks if any of {number, ., +/-} or an operator was clicked 
function handleClick(e) {
    let clicked = e.target.id;
    let parsed = parseInt(clicked);
    if (Number.isInteger(parsed)) {
        numberClick(parsed);
    } else if (clicked == '.' || clicked == '+/-') {
        numberClick(clicked);
    } else {
        operClick(clicked, parseFloat(display.textContent));
    }
}

// TODO the sequence '=, +/-' is broken. maybe make +/- it's own secondary function
// clicking numbers only effects the display
function numberClick(num) {
    if (prevClick == 'oper') {
        display.textContent = '';
    }
    prevClick = 'num';
    if (num == '+/-') {
        let str = display.textContent;
        let arr = str.split('');
        if (arr[0] == '-') {
            arr.shift();
        } else {
            arr.unshift('-');
        }
        display.textContent = arr.join('');
    } else if (num == '.' && display.textContent == '') {
        display.textContent += '0.';
    } else {
        display.textContent += num;
    }
}

// TODO what if they click an oper while curr is null? ... i guess handleClick / parse will send a 0?
function operClick(oper, curr) {
    if (oper == 'C') {
        stored = null;
        prevOper = null;
        prevClick = null;
    } else {
        prevClick = 'oper';
        if (stored == null) {
            stored = curr;
            prevOper = oper;
        } else {
            console.log(prevOper);
            switch (prevOper) {
                case '+':
                    stored += curr;
                    break;
                case '-':
                    stored -= curr;
                    break;
                case '*':
                    stored *= curr;
                    break;
                case '/':
                    stored /= curr;
                    break;
            }
            prevOper = oper;
        }
        stored = Math.round(stored * 100) / 100;
    }
    display.textContent = stored;
}
