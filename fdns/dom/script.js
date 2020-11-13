const container = document.querySelector('#container');

const p = document.createElement('p');
p.setAttribute('style', 'color: red;');
p.textContent = `hey i'm red`;

const h3 = document.createElement('h3');
h3.setAttribute('style', 'color: blue;');
h3.textContent = `i'm a blue h3`;

container.appendChild(p);
container.appendChild(h3);

const div = document.createElement('div');
div.setAttribute('style', 'border: 1px solid black; background: pink');

const divh1 = document.createElement('h1');
divh1.textContent = `i'm in a div`;

const divp = document.createElement('p');
divp.textContent = `me too`;

div.appendChild(divh1);
div.appendChild(divp);
container.appendChild(div);

const btn = document.querySelector('#btn');
btn.addEventListener('click', handleClick);

function handleClick(e) {
    //    alert('yo');
    //    console.log(e.target);
    e.target.setAttribute('style', 'background: blue;');
}
