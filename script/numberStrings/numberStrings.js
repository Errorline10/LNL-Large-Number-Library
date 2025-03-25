
const ns = (function () {
  // Private
  const LibraryName = "NumberStrings JS Library - by OrbitSquared";


  const inequality = (n1, n2) => {

  }
  
  const reverse = (s) => {
    return s.split("").reverse().join("")
  }
  
  const add = (n1, n2) => {
  
    // swap so num1 is the high one.
    if (n1.length < n2.length) { let t = n2; n2 = n1; n1 = t }
  
    // pad out second number
    for (let x = 0; x < n1.length; x++) {
      if (n2.length < n1.length) { n2 = "0" + n2 }
    }
  
    // do the math
    let finalSum = "";
    let carry = 0;
    let len = n1.length;
    for (let x = len - 1; x >= 0; x--) {
      let r1 = parseInt(n1[x])
      let r2 = parseInt(n2[x])
      let singleSum = (r1 + r2 + carry).toString()
      if (x == 0) {
        finalSum = singleSum + finalSum;
      } else {
        if (singleSum > 9) {
          carry = parseInt(singleSum[0]);
          finalSum = singleSum[1] + finalSum;
        } else {
          carry = 0;
          finalSum = singleSum[0] + finalSum;
        }
      }
    }
    return finalSum
  }
  
  const multiply = (num1, num2)  => {
    // make num1 the longer one.
    if (num1.length < num2.length) {
      let temp = num2
      num2 = num1
      num1 = temp
    }
  
    let result = "0"
    let r = 0
    let onePassTally = ""
    let zeroPad = ""
    let n3 = 0
  
    for (let x = num2.length - 1; x >= 0; x--) {
      let n2 = parseInt(num2[x])
      r = 0
      for (let y = num1.length - 1; y >= 0; y--) {
        let n1 = parseInt(num1[y])
        let mult = (n2 * n1 + r).toString()
  
        if (mult > 9) {
          r = parseInt(mult[0])
          n3 = mult[1]
        } else {
          r = 0
          n3 = mult[0]
        }
  
        onePassTally = n3 + onePassTally
      }
      onePassTally = onePassTally + zeroPad
      result = add(result, onePassTally)
      onePassTally = ""
      zeroPad = zeroPad + "0"
    }
    return result
  }

  const divide = (n1, n2)  => {
    if (n1 === n2) {
      return "0"
    } // they are the same number
    if (inequality(n1, n2) == 1) {
      return "the divisor is larger than the dividend"
    } // the divisor is bigger than the dividend
  
    // start to close in on the largest multiple without going over
    let quotient = n1
    let under = "1"
    let lastUnder = "0"
    let oddEven = "2" // assume even
    let l = n2[n2.length - 1]
    if (l == "1" || l == "3" || l == "5" || l == "7" || l == "9") {
      oddEven = "1"
    }
    let runAway = 0
    while (inequality(quotient, n2) !== "1" && runAway < 100) {
      runAway++
      quotient = multiply(n1, under)
      lastUnder = under
      under = add(under, oddEven)
    }
    return quotient
  }
  
  const UnitTests = (tests) => {
    // [ all | inequality | add | multiply | divide | reverse ]
    console.log('______________. Unit Tests _________________')
  
    if (tests == "inequality" || tests == "all") {
  
    }
  }


  // Public
  return {
    name: LibraryName,
    unitTests: UnitTests
  };
})();












