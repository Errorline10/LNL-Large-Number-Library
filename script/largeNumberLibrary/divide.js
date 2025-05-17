import _inequality from './inequality.js'
import _add from './add.js'
import _multiply from './multiply.js'
import _subtract from './subtract.js'
import _generateZeros from './generateZeros.js'

const _divide = (dividend, divisor) => {
  let negative = false
  if (divisor == "0") {
    return "Infinity"
  }

  if (divisor == "1") {
    return dividend
  }

  // check for negative numbers
  if ((dividend[0] == "-") && (divisor[0] == "-")) { // both negative
    dividend = dividend.slice(1)
    divisor = divisor.slice(1)
  } else { // one negative
    if (dividend[0] == "-") {
      negative = true
      dividend = dividend.slice(1)
    }
    if (divisor[0] == "-") {
      negative = true
      divisor = divisor.slice(1)
    }
  }

  // they are the same number
  if (_inequality(dividend, divisor) == 0) {
    if (negative == true) {
      return "-1"
    } else {
      return "1"
    }
  }


  // start to close in on the largest multiple without going over
  let odd = false
  let l = dividend[dividend.length - 1] // last digit
  if (l == "1" || l == "3" || l == "5" || l == "7" || l == "9") { odd = true }


  let count = 0;
  let guessPower = toString(dividend.length - 1);
  let guess = "1"
  let upperGate = 0
  let lowerGate = 0

  let pingPong = false

  let howClose = _inequality(dividend, divisor)
  let lastClose = 0

  if (_inequality(guessPower,"1" == 1)) {
    guess = guess + _generateZeros(guessPower)
  } else {
    guessPower = "0"
  }





  while (count < 10) {
    //console.log("--> guessPower =", guessPower)
    count++
    if (pingPong == true) {
      console.log("pingPong")

      if (_inequality(guessPower, "2" == 1)){
        guessPower = _subtract(guessPower,"1")
        console.log("guessPower reduced | ", guessPower)
      }
      pingPong = false
    }

    let guessMultiplied = _multiply(guess, divisor)

    lastClose = howClose
    howClose = _inequality(dividend, guessMultiplied)

//    console.log(guess, " * ", divisor, " = ", guessMultiplied)
//    console.log("howClose", howClose)
//    console.log("guessPower", guessPower)



    if (howClose == -1) {
      lowerGate = guessMultiplied
      guess = guess + _generateZeros(guessPower)
      console.log("adding guess", guess)
    }

    if (howClose == 0) { break }

    if (howClose == 1) {
      upperGate = guessMultiplied
      guess = guess + _generateZeros(guessPower)
      console.log("subtracting guess", guess, ("1" + _generateZeros(guessPower)))
    }

    if (howClose !== lastClose) { pingPong = true }



  }
  let quotient = guess

  if (negative == true) { return "-" + quotient } else { return quotient }

}
export default _divide