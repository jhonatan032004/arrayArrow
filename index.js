const dividir = require("./division.js")
const multiplicar = require("./multiplicacion.js")
const sumar = require("./suma.js")
const restar = require("./resta.js")
const vec = require("./vector.js")

let num1 = 10
let num2 = 5


console.log(dividir.mensaje() + dividir.division(num1, num2))
console.log(multiplicar.mensaje() + multiplicar.multiplicacion(num1, num2))
console.log(sumar.suma(num1, num2)) //malas practicas
console.log(restar.resta(num1, num2)) //malas practicas
console.log(vec.nombre(2))