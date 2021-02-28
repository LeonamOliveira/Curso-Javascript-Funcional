/* const rxjs = { interval: () => console.log('interval') } <= Usar par de chaves do lado direito da expressão você está criando um objeto literal.
    const { interval  } = rxjs <= Usar do lado esquerdo, você está usando destructuring para ler a informação.
    interval()
    */

const { interval } = require('rxjs')

const gerarNumeros = interval(500)

const sub1 = gerarNumeros.subscribe(num => {
    console.log(Math.pow(2, num))
})

const sub2 = gerarNumeros.subscribe(console.log)
 
setTimeout(() => sub1.unsubscribe(), 8000)
setTimeout(() => sub2.unsubscribe(), 6000)

