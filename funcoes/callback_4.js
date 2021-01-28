const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const getNome = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 0
// const qtdeMaiorIgualAZero = item => item.qtde >= 0
// const qtdeMuitoGrande = item => item.qtde >= 1000

const nomesItensValido = carrinho
    .filter(qtdeMaiorQueZero)
    .map(getNome)

console.log(nomesItensValido)

Array.prototype.meuFilter = function(fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i++) {
        if(fn(this[i], i, this)){
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const nomesItensValido2 = carrinho
    .meuFilter(qtdeMaiorQueZero)
    .map(getNome)

console.log(nomesItensValido2)