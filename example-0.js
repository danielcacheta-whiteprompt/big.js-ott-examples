const v1 = 0.1
const v2 = 0.2

const result = (v1 + v2).toFixed(1)
const resultPlusFive = result + 5
const realResultPlusFive = (parseFloat(result) + 5).toFixed(1)

console.log('result =', result, '   resultPlusFive =', resultPlusFive, '   realResultPlusFive =', realResultPlusFive)


