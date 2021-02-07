// Uma função pura é uma função em que o valor 
// de retorno é determinado apenas por seus valores
// de entrada, sem efeitos colaterais observáveis. 

// const PI = 3.14

// impura - PI é um valor externo

function areaCirc(raio) {
    return raio * raio * Math.PI
}

console.log(areaCirc(10))
console.log(areaCirc(10))
console.log(areaCirc(10))


// Pura
function areaCircPura(raio, pi) {
    return raio * raio * pi
}

console.log(areaCircPura(10, 3.14))
console.log(areaCircPura(10, 3.141592))
console.log(areaCircPura(10, Math.PI))