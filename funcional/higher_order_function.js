// Uma função pura é uma função em que o valor 
// de retorno é determinado apenas por seus valores
// de entrada, sem efeitos colaterais observáveis. 

function executar(fn, ...params) {
    return function(textoInicial) {
        return `${textoInicial} ${fn(...params)}!`
    }
}

function somar(a, b, c) {
    return a + b + c
}

function multi(a, b) {
    return a * b
}

const r1 = executar(somar, 4, 5 ,6)('O resultado da soma é: ')
const r2 = executar(multi, 4, 5 ,6)('O resultado da multiplicação é: ')
console.log(r1, r2)