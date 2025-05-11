import _inequalityTests from "./inequalityUnitTests.js";
import _multiplyTests from "./multiplyUnitTest.js";
import _addTests from "./addUnitTests.js"
import _subtractTests from "./_subtractTests.js";

const _allTests = (tests)=> {
    // [ all | inequality | add | multiply | divide | reverse ]
    console.log('______________ Unit Tests Init _________________ | ' + tests);

    if (tests == "inequality" || tests == "all") {
        _inequalityTests()
        _multiplyTests()
        _addTests()
        _subtractTests()
    }else{
      switch (tests){
        case "subtract": 
          _subtractTests
      }
    }


  }
export default _allTests