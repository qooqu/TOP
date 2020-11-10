function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(arr) {
	let sum = 0;
	arr.forEach(element => {
		sum = sum + element;
	});
	return sum;
}

function multiply(arr) {
	let product = 1;
	arr.forEach(element => {
		product = product * element;
	});
	return product;
}

function power(a, b) {
	return a ** b;
}

function factorial(num) {
	let fact = 1;
	for (let i = num; i > 0; i--) {
		fact = fact * i;
	}
	return fact;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}