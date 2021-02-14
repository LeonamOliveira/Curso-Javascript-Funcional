function textoComTamanhoEntre(min, max, erro, texto) {
    return function (max) {
        return function (erro) {
            return function (texto) {
                // Lazy Evaluation
                const tamanho = (texto || '').trim().length
            
                if(tamanho < min || tamanho > max) {
                    throw erro
                }    
            }
        }
    }
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = textoComTamanhoEntre('Nome produto inválido')

const p1 = { nome: 'A', preco: 14.99, desc: 0.25 }
textoComTamanhoEntre(p1.nome)