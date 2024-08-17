const person = {
    name: "Alisson",
    age: 34,
    talk: function () {
        console.log(this.age)
    }
}

function myFunction() {
    this.console.log("Agora eu sou global")
}


myFunction()