let y=0;

function task1() {
  let x = +prompt('Enter value of X');

  if (x > -10 && x <= -6 ) {
    y = x + 1;
  } else if (Math.abs(x) <= 3) {
    y = x * x;
  } else {
    y = x;
  }
  alert(y);
}

function task2() {
  let x = +prompt('Enter value of x');
  let a = +prompt('Enter value of a');
  let b = +prompt('Enter value of b');

  if (a + b > 10) {
    y = a * x + b;
  } else if (a + b >= -15 && a + b < 2) {
    y = b * x - a;
  } else {
    y = a + b;
  }
  alert(y);
}

function task3() {
  let x = +prompt('Enter value of x');
  let a = +prompt('Enter value of a');

  if (Math.abs(x) <= 4) {
    y = x + 3 * a;
  } else if (x > 5 && x <= 8) {
    y = a * x - 2;
  } else  if (Math.abs(x) > 20) {
    y = x * x;
  } else {
    y = 3 * x;
  }
  alert(y);
}

function task5() {
   let x = +prompt('Enter value of x');
   let y = +prompt('Enter value of y');

   if (x < y) {
     let temp = x;

     x = (x + y) / 2;
     y = (temp * y) / 2;
  } else if (x > y) {
    let temp = y;

    y = (x + y) / 2;
    x = (x * temp) / 2;
  }
  alert('x: ' + x + ', y: ' + y);
}

function task6() {
  let x = +prompt('Enter value of x');
  let y = +prompt('Enter value of y');
  let z = +prompt('Enter value of z');

  if (x + y > z && x + z > y && y + z > x) {
    if (x === y && x === z) {
      alert(2);
    } else if (x === y || y === z || x === z) {
      alert(3);
    } else {
      alert(1);
    }
  } else {
    alert('Not valid triangle');
  }
}
