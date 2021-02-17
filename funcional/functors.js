// wrapper
// Functors são objetos que implementam a função MAP 
// que também é um "wrapper" de um valor

// Array é um exemplo de functors
const nums = [1, 2, 3, 4, 5, 6]
const novosNums = nums
    .map(el => el + 10)
    .map(el => el * 2)

console.log(novosNums, nums)

function TipoSeguro(valor) {
    return {
        valor,
        invalido() {
            return this.valor === null || this.valor === undefined
        },
        map(fn) {
            if (this.invalido()) {
                return TipoSeguro(null)
            } else {
                const novoValor = fn(this.valor)
                return TipoSeguro(novoValor)
            }
        }
    }
}

const original = 'Esse é um texto'
const alterado = TipoSeguro(original)
    .map(t => t.toUpperCase())
    .map(t => `${t}!!!!`)
    .map(t => t.split('').join(' '))

console.log(original, alterado.valor)