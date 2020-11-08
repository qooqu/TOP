const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const contentp = document.createElement('p');
contentp.style.color = 'red';
contentp.textContent = 'p!';

content.appendChild(contentp);

container.appendChild(content);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});