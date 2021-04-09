const path = require('path')
const fn = require('./funcoes')
const { first } = require('rxjs/operators')
const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')', '!'
]

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementosTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeApenasNumero(),
        fn.separarTextoPor(' '),
        fn.removerSimbolos(simbolos),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeApenasNumero(),
    )
    .subscribe(console.log)

//     .then(fn.mesclarElementos)

//     .then(fn.agruparElementos)
//     .then(fn.ordenarPorAtribNumerico('qtde', 'desc'))
//     .then(console.log)