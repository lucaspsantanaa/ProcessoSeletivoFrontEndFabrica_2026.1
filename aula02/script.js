alert("Olá Mundo")

const numeroAleatorio = parseInt(Math.random() * 10) +1
let chute = prompt("Mini game número secreto!")
let tentativas = 1

while (chute != numeroAleatorio) {
    if (chute > numeroAleatorio) {
        chute = prompt("O número que você digitou é maior que o número secreto, tente novamente!")
    } tentativas++
    
    if (chute < numeroAleatorio) {
        chute = prompt("O número que você digitou é menor que o número aleatório. Tente novamente!")
    } tentativas++
} alert("Parábens, você acertou o número secreto!")
