function task12() {
  let n = +prompt('Enter value n');
  let sum = 0;

  if ( n <= 0) {
    alert('incorect value n');
  } else {
    for(i = 1; i<=n; i++ ){
      sum = sum + i*i 
    }
    alert(sum);
  }
}

//y havasare 2 i astichan

function task13() {
  let i = +prompt('Enter i power');
  let mult = 1;

  if (i < 1) {
    alert('incorect value i');
  } else {
    for (let j = 1; j <= i; j++) {
      mult *= 2; 
    }
    alert(mult);
  }
}

function task14() {
  let a = +prompt('Enter some natural big number');
  let sum = 0;

  for(i = 1; a >= sum; i++) {
    sum += i * i; 
  }
  alert(sum);
}

function task15() {
  let n = +prompt('Enter some natural number');
  let sum = 0;
  let power2 = 1;

  for(i = 1; i <= n; i++) {
    power2 *= 2;
    sum += power2;
    // solving with Math.pow
    // sum += Math.pow(2, i);
  }
  alert(sum);
}

function task16() {
  let n = +prompt('Enter some natural number');
  let y = 0;
  let denominator = 0;

  for(i = 1; i <= n; i++) {
    denominator += Math.sin(i);
    y += i / denominator;
  }
  alert(y);
}

function task21() {
  let x = +prompt('Enter x'),
      e = +prompt('Enter E'),
      numerator = 1,
      denominator = 1,
      sum = 0;

  for (let i = 1; numerator/denominator <= e; i += 2) {
    numerator = Math.pow(x, i);
    i > 1 && (denominator *= (i - 1) * i);
    sum += numerator / denominator;
  }
  alert(sum);
}
