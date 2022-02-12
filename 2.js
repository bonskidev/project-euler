// fibo formula
// check even num
// sum even num

const fiboEvenNum = (num) => {
  let fiboOne = 0
  let fiboTwo = 1
  let evenSum = 0

  // loop
  while (fiboTwo < num) {
    let newFibo = fiboOne + fiboTwo

    fiboOne = fiboTwo
    fiboTwo = newFibo

    if (fiboTwo % 2 === 0) {
      evenSum += fiboTwo
    }

  }

  return evenSum
}

console.log(fiboEvenNum(8))
console.log(fiboEvenNum(10))
console.log(fiboEvenNum(34))
console.log(fiboEvenNum(60))
console.log(fiboEvenNum(1000))
console.log(fiboEvenNum(100000))
console.log(fiboEvenNum(4000000))