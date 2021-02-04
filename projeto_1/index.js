const path = require('path')
const { log } = require('util')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
    .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
    .then(conteudos => conteudos.join('\n'))
    .then(todoConteudo => todoConteudo.split('\n'))
    .then(linhas => fn.removerSeVazio(linhas))
    .then(console.log)