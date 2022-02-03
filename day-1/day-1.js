let numberOne = 1
let stringOne = '1'
let numberThirty = 30
let stringThirty = '30'
let numberTen = 10
let stringTen = '10'

checkValue(numberOne, stringOne)
checkType(numberThirty, stringThirty)
checkValue(numberTen, stringTen)

function checkValue(value1, value2) {
    if (value1 == value2) {
        console.log("The variables have the same value")
    } else {
        console.log("The variables haven't the same value")
    }
}

function checkType(type1, type2) {
    if (type1 === type2) {
        console.log("The variables have the same type.")
    } else {
        console.log("The variables haven't the same type")
    }
}