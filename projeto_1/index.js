const path = require('path')
const { log } = require('util')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

fn.lerDiretorio(caminho)

    .then(console.log)