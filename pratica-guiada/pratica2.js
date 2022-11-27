/*Faça uma função
que receba como parâmetros, login e senha. 
No corpo da função declare duas variáveis do tipo string loginArmazenado e senhaArmazenada com lavores já pré estabelecidos. Usaremos essas variáveis para verificar se são iguais às que estamos recebendo como parâmetro. Retorne true se as duas variáveis forem verdadeiras.*/

const pratica3 = (loginDigitado, senhaDigitada) => {
const loginArmazenado = "admin@gmail.com"
const senhaArmazenada = "Bananinha"

return loginDigitado === loginArmazenado && 
       senhaDigitada === senhaArmazenada
}
console.log(pratica3("admin@gmail.com", "Bananinha")) //Acertou login, volta true
console.log(pratica3("admin@hotmai.com", "bananinha"))//Errou login.volta false

function pratica3Function (loginDigitado, senhaDigitada) {
    const loginArmazenado = "admin@gmail.com"
    const senhaArmazenada = "Bananinha"

    return loginDigitado === loginArmazenado &&
           senhaDigitada === senhaArmazenada          
}
console.log(pratica3Function("admin@gmail.com", "Bananinha")) //Acertou login, volta true
console.log(pratica3Function("admin@hotmai.com", "bananinha"))//Errou login.volta false