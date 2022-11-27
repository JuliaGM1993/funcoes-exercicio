//Crie uma função que receba por parâmetro um nome e imprima no console a mensagem: `Olá ${nome}`
//Invoque essa função 3 vezes passando 3 argumentos {nome} diferentes 


function pratica1Normal(nome){
console.log(`Olá ${nome}`)
}

const praticaArrow = (nome) => { //Arrow completa
console.log(`Olá ${nome}`) 
} 

const praticaArrow2 = (nome) => console.log(`Olá ${nome}`) //Arrow abreviada

const pratica1Return = (nome) => { //Se uma função não tem return, ela retorna "Undefined" por estar vazia
    return `Olá ${nome}`
}

pratica1Normal("Julia")
pratica1Normal("Victor")
pratica1Normal("Fernanda")
