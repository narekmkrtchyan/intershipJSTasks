// Page 92

function task2() {
	let n = +prompt('Enter value of n');
	let m = +prompt('Enter value of m');
	let sum = 0;

	for (let i = n; i <= m; i++) {
		sum += Math.pow(i, i);
	}
	alert(sum);
}

function task3() {
	let n = +prompt('Enter value of n');
	let sum = 0;
	let product = 1;

	for (let i = 1; i <= n; i++) {
		product = 1;
		for (let j = 1; j <= i; j++) {
			product = product * (i + j * j);
		}
		sum += (i + 1) * product;
	}
  alert(sum);
}

function task4() {
	let n = +prompt('Enter value of n');
	let x = +prompt('Enter value of x');
	let numerator = 0;
	let denominator = 1;
	let sum = 0;

	for(let i = 1; i <= n; i++){
		numerator = Math.pow(i, i) * Math.pow(x, i);
		denominator *= i;
	  sum += numerator / denominator;
	}
	alert(sum);
}

function task5() {
	let n = +prompt('Enter value of n');
  let temp = 0;
  let sum = 0;

	for (let i = 1; i <= n; i++) {
		temp += Math.pow(-1, i) * factorial(2 * Math.pow(i, 2) + 1);
	}
	sum = (1 / factorial(n)) * temp;
	alert(sum);
}

function factorial(k) {
	let temp = 1;

	for (let i = 1; i <= k; i++) {
		temp *= i;
	}
	return temp;
}