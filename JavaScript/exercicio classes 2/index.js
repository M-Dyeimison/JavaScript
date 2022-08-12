class Spaceship {

    static get decelerationRate() {
        return 0.17
    }

    constructor(name, crewQuatity) {
        this.name = name;
        this.crewQuatity = crewQuatity;
        this.currentSpeed = 0
    }

    speedUp(acceleration) {
        this.currentSpeed += (acceleration * (1 - Spaceship.decelerationRate))
    }
}

class BattleSpaceship extends Spaceship{
    constructor(name, crewQuantity, weaponQuantity) {
        super(name, crewQuantity)
        this.weaponQuantity = weaponQuantity
    }
}

class TransportSpaceship extends Spaceship{
    constructor(name, crewQuantity, seatsQuantity) {
        super(name, crewQuantity)
        this.seatsQuantity = seatsQuantity
    }
}

function menu(spaceship) {
    let answer = Number(prompt("1- Acelerar a nave\n2- Trocar a nave\n3- Imprimir e sair"))
    if(answer == 1) {
        
    }else if(answer == 2) {
        spaceship = createSpaceship()
        menu(spaceship)
    }else if(answer == 3) {
        alert("Nome: " + "Quantidade de tripulantes: " + "Velocidade atual: ")
    }
}

function spaceshipType (name, crewQuantity) {
    let spaceship_Type = Number(prompt("Tipo de nave: \n1- Nave de batalha\n2- Nave de transporte"))

    if(spaceship_Type == 1) {
        weaponQuantity = Number(prompt("Número de armas: "))
        spaceship = new BattleSpaceship(name, crewQuantity, weaponQuantity)
        return spaceship
    }else if(spaceship_Type == 2) {
        seatsQuantity = Number(prompt("Número de lugares: "))
        spaceship = new TransportSpaceship(name, crewQuantity, seatsQuantity)
        return spaceship
    }
}

function createSpaceship() {
    let name = prompt("Nome da nave espacial: ")
    let crewQuantity = Number(prompt("Número de passageiros: "))
    return spaceship = spaceshipType(name, crewQuantity)
}

let spaceship = createSpaceship()