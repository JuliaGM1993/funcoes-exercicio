//a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).
const soma = (numero1, numero2) => {
    return (numero1 + numero2)
}
soma(5,22)

const subtração = (numero1, numero2) => {
    return (numero1 - numero2)
}
subtração(25,88)

const multiplicacao = (numero1, numero2) =>{
    return (numero1 * numero2)
}
multiplicacao(10,8)

const divisao = (numero1, numero2) =>{
    return (numero1 / numero2)
}
divisao(20,4)
//b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.
const numero1 = Number(prompt("Insira um numero aqui"))
const numero2 = Number(prompt("Insira outro numero aqui")) 

//c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.
const mais = (numero1, numero2) => {
    console.log("O resultado da soma dos números é: ", numero1 + numero2)
}
mais(numero1,numero2)


const menos = (numero1, numero2) => {
    console.log("Oresultado da subtração dos números é: ", numero1 - numero2)
}
menos(numero1,numero2)


const vezes = (numero1, numero2) =>{
console.log("O resultado da multiplicação dos números é:", numero1 * numero2)
}
vezes(numero1,numero2)


const dividido = (numero1, numero2) =>{
    console.log("O resultado da divisão dos números é: ", numero1 / numero2)
}
dividido(numero1,numero2)


//d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.
