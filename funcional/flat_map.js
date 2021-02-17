const letrasAninhadas = [
    ['O', 'l', 'a'],
    [' '],
    ['m', 'u', 'n', 'd', 'o']
]


const letras = letrasAninhadas.flat(Infinity)
console.log(letras.flat())

const resultado = letras
    .flatMap(l => [l, ','])
    .reduce((a, b) => a + b)

console.log(resultado)