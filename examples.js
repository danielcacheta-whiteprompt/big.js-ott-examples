import Big from "big.js"

const jsCalc = 0.3 - 0.1 // 0.19999999999999998
console.log('jsCalc :>>', jsCalc)
console.log('jsCalc.toFixed(16) :>>', jsCalc.toFixed(16))
console.log('jsCalc.toFixed(100) :>>', jsCalc.toFixed(100))

const test = new Big(0.3) - new Big(0.1)

console.log(test)

const v1 = new Big(22222222222222222222.222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222223) 
const v2 = new Big(11111111111111111111.111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111)

const result = new Big(v1 - v2);
console.log('result :>>', result)

console.log(v1 - v2)
const minusResult = v1.minus(v2);
console.log(minusResult.toString())

// 1111111111111111




// extension for VSCode
// https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-js-profile-flame