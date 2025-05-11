import _subtract from "../subtract.js";

const _subtractTests = () => {

  console.log('subtract');

  // 1-1
  if (_subtract('1', '1') == '0') {
    console.log("✅ _subtract('1','1') == 0");
  } else {
    console.log("❌ _subtract('1','1') == ", _subtract('1', '1'));
  }
    
  // 5-3
  if (_subtract('5', '3') == '2') {
    console.log("✅ _subtract('5','3') == 2");
  } else {
    console.log("❌ _subtract('5','3') == ", _subtract('5', '3'));
  }

  // 100-10
  if (_subtract('100', '10') == '90') {
    console.log("✅ _subtract('100','10') == 90");
  } else {
    console.log("❌ _subtract('100','10') == ", _subtract('100', '10'));
  }

  // 10-100
  if (_subtract('10', '100') == '-90') {
    console.log("✅ _subtract('10','100') == -90");
  } else {
    console.log("❌ _subtract('10','100') == ", _subtract('10', '100'));
  }

  // 123456789-123456789
  if (_subtract('123456789', '123456789') == '0') {
    console.log("✅ _subtract('123456789','123456789') == 0");
  } else {
    console.log("❌ _subtract('123456789','123456789') == ", _subtract('123456789', '123456789'));
  }


  // 123456780-123456789
  if (_subtract('123456780', '123456789') == '-9') {
    console.log("✅ _subtract('123456780','123456789') == -9");
  } else {
    console.log("❌ _subtract('123456780','123456789') == ", _subtract('123456780', '123456789'));
  }


}
export default _subtractTests
