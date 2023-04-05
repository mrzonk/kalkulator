//ambil elemen class number
const numbers = document.querySelectorAll(".number")

//menambah event kesetiap elemen
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})

//ambil elemen class calculator screen
const calculatorScreen = document.querySelector('.calculator-screen')

//tampilkan hasil setiap tombol ditekan
const updateScreen = (number) => {
    calculatorScreen.value = number
}


//menambah event ketika tombol ditekan agar otomatis tampilan diperbarui
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})


let prevNumber = ''
let calculationOperator = ''
let currentNumber ='0'

//memberikan number diklik ke variable currentNumber
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})


const operators = document.querySelectorAll(".operator")
//menambahn event tombol operator
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

//mendefinisikan function inputOperator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}


const equalSign = document.querySelector('.equal-sign')


equalSign.addEventListener('click', () => {
    // console.log('equal button is pressed')
    calculate()
    updateScreen(currentNumber)
})

//function calculator/menghitung
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}



//membersihkan number dan operator
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})


inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    // console.log(event.target.value)
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
