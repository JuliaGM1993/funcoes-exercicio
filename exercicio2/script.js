//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
const soma = (numero1, numero2) => {
console.log("A soma do",numero1,"e do",numero2,"é: ",numero1 + numero2)
}
soma(5,9)

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
const bol = (numero1, numero2) => {
    console.log("O primeiro número",numero1,"é maior ou igual ao segundo número",numero2, numero1 >= numero2)
}
bol(12,33)

//c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.
const parOuNao = (numero) =>{
    console.log("O número informado",numero,"é par: ",numero % 2 === 0)
}
parOuNao(44,55)

//d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS. 
const salario = (valor) => {
    const inss = valor*0.1
    console.log("O valor do salário",valor,"com o desconto de 10% do INSS é: ",valor - inss)
}
salario(1500.00)