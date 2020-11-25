// import _ from 'lodash';
import myName from './myName';

function component() {
    const element = document.createElement('div');
    element.innerHTML = myName('alf');
    return element;
}

document.body.appendChild(component());