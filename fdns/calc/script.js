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

let buttonArray = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', '+/-', 0, '.', '/', '=', 'C'];
buttonArray.forEach(ele => {
    let btn = document.createElement('button');
    btn.id = ele;
    btn.style.width = '100%';
    btn.style.height = '100%';
    btn.style.background = ele == 'C' ? 'orange' : ['+', '-', '*', '/', '='].indexOf(ele) == -1 ? 'lightblue' : 'lightgreen';
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

display.textContent = 0;

// functionality

// keep track of
// running value
let stored = null;
// operator to be applied ... when user clicks an oper, the previous oper is executed
let prevOper = null;
// was the previous click on a number or an operator
let prevClick = null;

// send any of {number, ., +/-} to numClick, otherwise call operClick
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

// clicking numbers only effects the display
function numberClick(num) {
    if (prevClick == 'oper' || display.textContent == '0') {
        display.textContent = '';
    }
    // if prevOper was '=', the user is starting a new calc
    if (prevOper == '=') {
        stored = null;
        prevOper = null;
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
    } else if (num == '.' && display.textContent.indexOf('.') != -1) {
        return;
    } else {
        display.textContent += num;
    }
}

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
        // stored = Math.round(stored * 100) / 100;
    }
    display.textContent = stored || '0'; // if stored is null, fall back to 0
}
