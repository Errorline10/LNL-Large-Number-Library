import _inequalityTests from "./inequalityUnitTests.js";

const _allTests = (tests)=> {
    // [ all | inequality | add | multiply | divide | reverse ]
    console.log('______________ Unit Tests Init _________________ | ' + tests);

    if (tests == "inequality" || tests == "all") {
        _inequalityTests()
    }
  }
export default _allTests