const arr = new Array(100).fill().map((val, index) => index + 1);

function fizzbuzz(n) {
  switch (true) {
    case n % 15 === 0:
      return "fizzbuzz";
    case n % 3 === 0:
      return "fizz";
    case n % 5 === 0:
      return "buzz";
    default:
      return n;
  }
}

for (num of arr) {
  console.log(fizzbuzz(num));
}
