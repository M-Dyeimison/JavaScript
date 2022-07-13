let spaceship = prompt("Nome da espaçonave: ")
let dobra = 0
let enter_fold = 0

while(enter_fold != 2){
    enter_fold = prompt("Entrar na dobra espacial?\n1 - Sim\n2 - Não")
    if(enter_fold == 1) dobra++
}
alert("Spaceship: " + spaceship + "\nNúmero de dobras: " + dobra)