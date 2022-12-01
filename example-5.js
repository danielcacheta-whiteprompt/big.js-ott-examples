import Big from "big.js"

const [a, b, c] = [1, -4, -5]

if (a === 0)
  throw Error("Unable to calculate")

const delta = Big(b).pow(2).minus(Big(4).times(a).times(c))
console.log('delta =', delta, '    Big(delta).sqrt()=', Big(delta).sqrt())

const x1 = (Big(b).neg().plus((delta).sqrt())).div(Big(2).times(a))
const x2 = (Big(b).neg().minus((delta).sqrt())).div(Big(2).times(a))
console.log('x1 =', x1, '        x2 =', x2)

