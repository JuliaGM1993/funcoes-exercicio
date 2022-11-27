/*Declare uma função que:
Receba um nome, um ano de nascimento e o ano  Atual 
Retorne uma string com um boleano true para se o usuário for maior de idade e false para se for menor de idade. 
A string retornada deve ter a seguinte mensagem:
“Fulano é maior de idade? true”
Chame a função duas vezes, passando como argumento nomes e anos de nascimento diferentes.*/


const anoAtual = 2022

const nome = "Julia"
const anoNasc = 1993

const nome2 = "Gabriel"
const anoNasc2 = 2006

function maioridade(anoAtual, anoNasc){
    return anoAtual - anoNasc >= 18
}
console.log(nome, "já é maior de idade", maioridade(anoAtual, anoNasc))
console.log(nome2, "já é maior de idade", maioridade(anoAtual,anoNasc))