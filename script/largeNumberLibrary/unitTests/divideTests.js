import _divide from "../divide.js";

const _divideTests = () => {

  console.log('divide');

  // 1/0
  if (_divide('1', '0') == 'Infinity') {
    console.log("✅ _divide('1','0') == Infinity");
  } else {
    console.log("❌ _divide('1','0') == ", _divide('1', '0'));
  }
    
  // 1/1
  if (_divide('1', '1') == '1') {
    console.log("✅ _divide('1','1') == 1");
  } else {
    console.log("❌ _divide('1','1') == ", _divide('1', '1'));
  }

  // 10/10
  if (_divide('10', '10') == '1') {
    console.log("✅ _divide('10','10') == 1");
  } else {
    console.log("❌ _divide('10','10') == ", _divide('10', '10'));
  }

  // 10/5
  if (_divide('10', '5') == '2') {
    console.log("✅ _divide('10','5') == 2");
  } else {
    console.log("❌ _divide('10','5') == ", _divide('10', '5'));
  }

  // 9/3
  if (_divide('9', '3') == '3') {
    console.log("✅ _divide('9','3') == 3");
  } else {
    console.log("❌ _divide('9','3') == ", _divide('9', '3'));
  }


  // 100/2
  if (_divide('1000', '2') == '500') {
    console.log("✅ _divide('1000','2') == 500");
  } else {
    console.log("❌ _divide('1000','2') == ", _divide('1000', '2'));
  }

  // -2/2
  if (_divide('-2', '2') == '-1') {
    console.log("✅ _divide('-2','2') == -1");
  } else {
    console.log("❌ _divide('-2','2') == ", _divide('-2', '2'));
  }

  // 2/-2
  if (_divide('2', '-2') == '-1') {
    console.log("✅ _divide('2','-2') == -1");
  } else {
    console.log("❌ _divide('2','-2') == ", _divide('2', '-2'));
  }

  // -2/-2
  if (_divide('-2', '-2') == '1') {
    console.log("✅ _divide('-2','-2') == 1");
  } else {
    console.log("❌ _divide('-2','-2') == ", _divide('-2', '-2'));
  }

//   // 10009/2
//   if (_divide('10009', '2') == '5004.5') {
//     console.log("✅ _divide('10009','2') == 5004.5");
//   } else {
//     console.log("❌ _divide('10009','2') == ", _divide('10009', '2'));
//   }


//   // 1000000000/20
//   if (_divide('1000000000', '20') == '50000000') {
//     console.log("✅ _divide('1000000000','20') == 50000000");
//   } else {
//     console.log("❌ _divide('1000000000','20') == ", _divide('1000000000', '20'));
//   }


//   // 1000000000000000000000000000009/2
//   if (_divide('1000000000000000000000000000009', '2') == '0') {
//     console.log("✅ _divide('1000000000000000000000000000009','2') == 2000000000000000000000000000018");
//   } else {
//     console.log("❌ _divide('1000000000000000000000000000009','2') == ", _divide('1000000000000000000000000000009', '2'));
//   }


}
export default _divideTests
