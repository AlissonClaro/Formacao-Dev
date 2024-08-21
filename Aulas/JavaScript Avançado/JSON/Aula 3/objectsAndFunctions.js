
function multi (firstNumber, seccondNumber) {
    return firstNumber * seccondNumber
}

function sum (firstNumber, seccondNumber) {
    return firstNumber + seccondNumber
}

const person = {
    name: "Alisson",
    age: 34,
    talk: function () {
        console.log("Hello")
    }
}


this.personExport = person

// module.exports = {multi, sum, person}