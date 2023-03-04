const fs = require("fs")
const path = require("path")

const filePath = process.argv[2]

if (filePath) {
  nonInteractiveMode()
} else {
  interactiveMode()
}

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

function interactiveMode() {
  function ask(i) {
    process.stdout.write(questions[i])
  }
  const questions = ["Input a: ", "Input b: ", "Input c: "]
  const params = []
  process.stdout.write(questions[0])
  process.stdin.on("data", (data) => {
    if (params.length < questions.length) {
      if (!isNum(data)) {
        console.log(`Error. Expected a valid real number, got ${data.toString().trim()} instead`);
        ask(params.length)
      } else if (data.toString().trim() == 0 && params.length == 0) {
        console.log(`Error. a cannot be 0`);
        ask(params.length)
      } else {
        params.push(+data.toString().trim())
        if (params.length < questions.length) {
          ask(params.length)
        } else {
          solveQuadraticEquation(...params)
          process.exit()
        }
      }
    }
  })
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

function isNum(arg) {
  const num = parseFloat(arg.toString().trim())
  if (isNaN(num)) {
    return false
  } else {
    return true
  }
}

function checkFormat(data) {
  return /^-?\d(\.\d+)?\s-?\d(\.\d+)?\s-?\d(\.\d+)?$/.test(data)
}