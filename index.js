const fs = require("fs")
const path = require("path")


function nonInteractiveMode() {
  if (!fs.existsSync(path.resolve(__dirname, filePath))) {
    console.log(`file ${filePath} does not exist`)
    return
  } else {
    fs.readFile(path.resolve(__dirname, filePath), "utf-8", (err, data) => {
      if (err) throw err
      if (!checkFormat(data)) {
        console.log("invalid file format")
        return
      } else {
        const [a, b, c] = data.split(' ').map(elem => +elem)
        if (a === 0) {
          console.log("Error. a cannot be 0")
          return
        }
        solveQuadraticEquation(a, b, c)
      }
    })
  }
}

function solveQuadraticEquation(a, b, c) {
  console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`)
  const desc = (b ** 2) - 4 * a * c
  if (desc < 0) {
    console.log("There are 0 roots")
    return
  } else if (desc === 0) {
    const x1 = (-b) / (2 * a)
    console.log(`There are 1 roots \nx1 = ${x1.toFixed(3)}`)
  } else {
    const x1 = (-b + Math.sqrt(desc)) / (2 * a)
    const x2 = (-b - Math.sqrt(desc)) / (2 * a)
    console.log(`There are 2 roots\nx1 = ${x1.toFixed(3)}\nx2 = ${x2.toFixed(3)}`)
  }
}

function checkFormat(data) {
  return /^-?\d(\.\d+)?\s-?\d(\.\d+)?\s-?\d(\.\d+)?$/.test(data)
}