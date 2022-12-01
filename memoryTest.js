import Big from "big.js"

const totalElementsToAdd = 10000000
const start = Date.now()

const elements = []
for (let i = 0; i < totalElementsToAdd; i++) {
  elements.push(new Big(Math.random()))
  // elements.push(Math.random())
}

const end = Date.now()
console.log('elements.length:', elements.length)
console.log(`Execution time: ${end - start} ms`)
const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
console.log(`The script uses approximately ${memoryUsage} MB`)


