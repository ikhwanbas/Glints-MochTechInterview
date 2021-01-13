const isPrime = num => {

  if (num <= 1) {
    return `${num}` + ' IS NOT A PRIME'
  } else if (num % 2 == 0 && num > 2) {
    return `${num}` + ' IS NOT A PRIME'
  } else {
    let s = Math.sqrt(num)

    for (let i = 3; i <= s; i++) {
      if (num % i === 0) {
        return `${num}` + ' IS NOT A PRIME'
      }
    }

    return `${num}` + ' IS A PRIME';
  }

}

// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

test(isPrime(2), '2 IS A PRIME')
test(isPrime(283), '283 IS A PRIME')
test(isPrime(21), '21 IS NOT A PRIME')
test(isPrime(389), '389 IS A PRIME')
test(isPrime(973), '973 IS NOT A PRIME')

