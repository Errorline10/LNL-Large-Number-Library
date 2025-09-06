import _isOddTests from "./isOddTests.js";
import _inequalityTests from "./inequalityUnitTests.js";
import _multiplyTests from "./multiplyUnitTest.js";
import _addTests from "./addUnitTests.js"
import _subtractTests from "./subtractTests.js";
import _divideTests from "./divideTests.js";
import _generateZerosTests from "./generateZeroTests.js";
import _lengthTests from "./lengthTests.js";

const _allTests = (tests) => {
  // [ all | inequality | add | multiply | divide | reverse ]
  console.log('______________ Unit Tests Init _________________ | ' + tests);
  console.log('This systems Number.MAX_SAFE_INTEGER is: ', Number.MAX_SAFE_INTEGER);

  if (tests == "length" || tests == "all") {
    _lengthTests()
  }

  if (tests == "isOdd" || tests == "all") {
    _isOddTests()
  }

  if (tests == "inequality" || tests == "all") {
    _generateZerosTests()
    _inequalityTests()
    _multiplyTests()
    _addTests()
    _subtractTests()
    //_divideTests()
  } else {
    switch (tests) {
      case "subtract":
        _subtractTests
    }
  }


}
export default _allTests