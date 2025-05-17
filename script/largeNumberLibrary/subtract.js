import _inequality from './inequality.js'
import _add from './add.js'


const _subtract = (n1, n2) => {
  let negative = false    
  
  // same so they cancel out
  if (n1 === n2) return "0"

  // check for negative numbers
  if ((n1[0] == "-") && (n2[0] !== "-")){
    n1 = n1.slice(1)
    return "-" + _add(n1,n2)
  }
  if ((n2[0] == "-") && (n1[0] !== "-")){
    n2 = n2.slice(1)
    return _add(n1,n2)
  }

  // swap so num1 is the high one.
  if (_inequality(n1,n2) == 1){ 
    negative = true
    let t = n2; n2 = n1; n1 = t 
  }

  // same length so compare left to right until different
  if (n1.length == n2.length) {
    let xout = 0;
      for(let x=0; x <= n1.length; x++){
        if (parseInt(n1[x]) != parseInt(n2[x])){
          xout = x;
          break;
        } 
      }
      if (n1[xout] < n2[xout]){
        negative = true;
        let t = n2; n2 = n1; n1 = t
      }
  }

  // pad out second number
  for (let x = 0; x < n1.length; x++) {
    if (n2.length < n1.length) { n2 = "0" + n2 }
  }
  
  // do the math
  let finalSum = "";
  let len = n1.length;
  for (let x = len - 1; x >= 0; x--) {
    let r1 = parseInt(n1[x])
    let r2 = parseInt(n2[x])

    // borrow if needed
    if (r1 < r2){
      if (n1[x-1] > 0){
        n1 = n1.slice(x-2) + (parseInt(n1[x-1]) -1) + n1.substr(x,n1.length) 
        r1 = r1 + 10
      } 
    }

    finalSum = (r1 - r2).toString() + finalSum;
  }

  //trim leading zeros
  for (let x=0; x<finalSum.length;x++){
    if (finalSum[x] != 0){
      finalSum = finalSum.slice(x,finalSum.length)
    }
  }


  // return , negitive if it was flipped
  if (negative == true){
    return "-" + finalSum
  } else {
    return finalSum
  }
}
export default _subtract;
  