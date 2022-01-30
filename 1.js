// pseudo code

// under 1000 -> 0 up to 999
// divided by 3
// or
// divided by 5
// total

const sum3or5 = (num) => {
  let total = 0;

  for (let i = 0; i < num; i++) {
    if (i % 3 === 0) {
      total += i;
    } else if (i % 5 === 0) {
      total += i;
    }
  }

  return total;
}

console.log(sum3or5(10)); // total 23
console.log(sum3or5(1000));