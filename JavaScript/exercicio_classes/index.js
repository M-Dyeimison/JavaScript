class Spaceship {
    constructor(name, crewQuatity, hitched = false, doors = false){
        this.name = name,
        this.crewQuatity = crewQuatity,
        this.hitched = hitched,
        this.doors = doors
    }
}

function menu(spaceStation){
    let i = true

    while(i){
        let menu = prompt(" 1. Realizar engate\n 2. Imprimir naves\n 3. Sair do programa")
        if(menu == "1"){
            spaceStationSignIn(spaceStation)
            continue
        }else if(menu == "2"){
            alert(spaceStation.map(spaceship => {return spaceship.name}).join(", "))
            continue
        }else if(menu == "3"){
            alert("Arrivedersi!")
            break
        }
    }
}

function spaceStationSignIn(spaceStation){
    let name = prompt("Digite o nome da nave: ")
    let crewQuatity = Number(prompt("\nDigite a quantidade de tripulantes na nave: "))
    let spaceship = new Spaceship(name, crewQuatity, true, true)
    spaceStation.push(spaceship)
}

let spaceStation = new Array()
menu(spaceStation)