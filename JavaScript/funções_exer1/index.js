let spaceship_name = prompt("Digite o nome da espaçonave: ")
let spaceship_velocity = 0

menu(spaceship_name, spaceship_velocity)

function menu(spaceship_name, spaceship_velocity = 0) {
    let menu_option = prompt("1 - acelerar nave em 5km/s\n2 - Desacelerar em -5km/s\n3 - Imprimir dados de bordo\n4 - Sair do programa")
    let exit_menu = ""
    switch(menu_option){
        case "1":
            spaceship_velocity+=5
            break
        case "2":
            if(spaceship_velocity - 5 >= 0) spaceship_velocity-=5
            break
        case "3":
            alert("Spaceship name: " + spaceship_name + "\nSpaceship velocity: " + spaceship_velocity)
            break
        case "4":
            alert("Encerrando programa de bordo")
            exit_menu += "a"
            break
        default:
            menu(spaceship_name, spaceship_velocity)
    }
    if(exit_menu != "a") menu(spaceship_name, spaceship_velocity)
}