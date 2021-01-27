
const nums = [1, 2, 3, 4, 5]
const dobro = (n, i, a) => n * 2 + i + a.length

console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)