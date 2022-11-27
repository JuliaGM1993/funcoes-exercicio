//para saber se um número é par ou ímpar 
//dividimos por 2 e pegamos o resto
//se o resto for 0 é par, se não, é ímpar

function pratica1 (num) {
    const verifica = num % 2 ===0
    const soma = num + 10
    const multiplica = num * num

return `O número ${num} é par? ${num % 2 === 0}. Somado com 10 o resultado é ${num + 10} e multiplicado por ele mesmo é ${num * num}`

}

const numInformado = Number(prompt("Informe um número"))
console.log(pratica1(numInformado))