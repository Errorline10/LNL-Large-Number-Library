import _inequality from './inequality.js'
import _add from './add.js'
import _multiply from './multiply.js'
import _divide from './divide.js'
import _reverse from './reverse.js'
import _allTests from './unitTests/allTests.js'

const ns=()=>{
  // Private
  const LibraryName = "NumberStrings JS Library - by OrbitSquared"

  // Public
  return {
    allTests: _allTests,
    inequality: _inequality,
    add: _add
  };

}

export default ns;



