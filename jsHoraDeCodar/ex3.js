function executarExercicio3() {
    alert("Escreva um programa em que o usuário informe o seu nome e em seguida o programa perguntará a idade do usuário. Agora o programa deve exibir a mensagem *Olá, [NomeDoUsuario], sua idade é [idade]*.")

    var NomeDoUsuario = prompt("Qual o seu nome? ")
    var idade = parseInt(prompt("Agora, qual a sua idade?"))

    alert("Olá " + NomeDoUsuario + ", sua idade é: " + idade + "!")
}