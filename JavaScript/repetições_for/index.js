let spaceship_name = prompt("Digite o nome da espaçonave: ")
let change_character = prompt("Qual caractere deseja substituir: ")
let new_character = prompt("Qua o novo caractere: ")
let new_spaceship_name = ""

for(let i = 0; i < spaceship_name.length; i++){
    if(spaceship_name[i] == change_character) new_spaceship_name += new_character
    else new_spaceship_name += spaceship_name[i]
}
alert("Novo nome da espaçonave: " + new_spaceship_name)