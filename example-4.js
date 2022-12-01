import Big from "big.js"

const [v1, v2, v3] = [2.4, 2.5, 2.6]

Big.RM = Big.roundHalfUp

console.log('roundHalfUp  v1:', Big(v1).toFixed(0), '    v2: ', Big(v2).toFixed(0), '    v3: ', Big(v3).toFixed(0))

Big.RM = Big.roundHalfEven

console.log('rounHalfEven v1:', Big(v1).toFixed(0), '    v2: ', Big(v2).toFixed(0), '    v3: ', Big(v3).toFixed(0))