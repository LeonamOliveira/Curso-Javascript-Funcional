const fs = require('fs')
const { parse } = require('path')
const path = require('path')
const { Observable } = require('rxjs')

function lerDiretorio(caminho) {
    return new Observable(subscriber => {
        try {
            fs.readdirSync(caminho).forEach(arquivo => {
                subscriber.next(path.join(caminho, arquivo))
            })
            subscriber.complete()
        } catch (e) {
            subscriber.error(e)
        }
    })
}

function lerArquivo() {
    return createPipeableOperator(subscriber => ({
        next(caminho) {
            try {
                const conteudo = fs.readFileSync(caminho, {
                    encoding: 'utf-8'
                })
                subscriber.next(conteudo.toString())
            } catch (e) {
                subscriber.error()
            }
        }
    }))
}

function elementosTerminadosCom(padraoTextual) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            if (texto.endsWith(padraoTextual)) {
                subscriber.next(texto)
            }
        }
    }))
}

function removerElementosSeVazio() {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            if (texto.trim()) {
                subscriber.next(texto)
            }
        }
    }))
}

function removerElementosSeApenasNumero() {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            const num = parseInt(texto.trim())
            if (num !== num) {
                subscriber.next(texto)
            }
        }
    }))
}

function removerSimbolos(simbolos) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            const textoSemSimbolos = simbolos.reduce(
                (acc, simbolo) => {
                    return acc.split(simbolo).join('')
                },
                texto)
            subscriber.next(textoSemSimbolos)
        }
    }))
}

function mesclarElementos(array) {
    return array.join(' ')
}

function separarTextoPor(simbolo) {
    return createPipeableOperator(subscriber => ({
        next(texto) {
            texto.split(simbolo).forEach(parte => {
                subscriber.next(parte)
            })
        }
    }))
}

function agruparElementos(palavras) {
    return Object.values(palavras.reduce((acc, palavra) => {
        const el = palavra.toLowerCase()
        const qtde = acc[el] ? acc[el].qtde + 1 : 1
        acc[el] = { elemento: el, qtde }
        return acc
    }, {}))
}

function ordenarPorAtribNumerico(attr, ordem = 'asc') {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return [...array].sort(ordem === 'asc' ? asc : desc)
    }
}

function createPipeableOperator(operatorFn) {
    return function (source) {
        return Observable.create(subscriber => {
            const sub = operatorFn(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (() => subscriber.complete())
            })
        })
    }
}


module.exports = {
    lerDiretorio,
    lerArquivo,
    elementosTerminadosCom,
    mesclarElementos,
    removerElementosSeVazio,
    removerElementosSeApenasNumero,
    removerSimbolos,
    separarTextoPor,
    agruparElementos,
    ordenarPorAtribNumerico
}