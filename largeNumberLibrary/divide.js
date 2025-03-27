const _divide = (n1, n2) => {
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
export default _divide