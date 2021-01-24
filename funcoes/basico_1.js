let a = 4

console.log(a)

// Function Declaration
function bomDia() {
    console.log('Bom dia')
}

bomDia()

// Function expression
const boaTarde = function () {
    console.log('Boa tarde!')
}

boaTarde()

// Javascript é multiparadigma, pois tem programação orientada a objetos, procedural e funcional.

function somar(a, b) {
    return a + b
}

let result = somar(3, 4)
console.log(result)

result = somar(3, 4, 5, 6)
console.log(result)

result = somar(3)
console.log(result)