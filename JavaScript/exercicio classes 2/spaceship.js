class Spaceship {

    static get decelerationRate() {
        return 0.17
    }

    constructor(name, crewQuatity) {
        this.name = name
        this.crewQuantity = crewQuatity
        this.currentSpeed = 0
        this.type = 0
    }

    speedUp(acceleration) {
        this.currentSpeed += (acceleration * (1 - Spaceship.decelerationRate))
    }
}

class App {
    constructor() {
        this.spaceship = null
    }

    spaceshipType (name, crewQuantity) {
        let spaceship_Type
    
        while(![1, 2].includes(spaceship_type)){
           spaceship_Type = Number(prompt("Tipo de nave: \n1- Nave de batalha\n2- Nave de transporte"))
        }
    
        if(spaceship_Type == 1) {
            weaponQuantity = Number(prompt("Número de armas: "))
            this.spaceship = new BattleSpaceship(name, crewQuantity, weaponQuantity)
            this.spaceship.type = spaceship_Type
            return spaceship
        }else if(spaceship_Type == 2) {
            seatsQuantity = Number(prompt("Número de lugares: "))
            this.spaceship = new TransportSpaceship(name, crewQuantity, seatsQuantity)
            this.spaceship.type = spaceship_Type
            return spaceship
        }
    }
    
    createSpaceship() {
        let name = prompt("Nome da nave espacial: ")
        let crewQuantity = Number(prompt("Número de passageiros: "))
        this.spaceship = spaceshipType(name, crewQuantity)
    }

    menu(spaceship) {
        let answer = Number(prompt("1- Acelerar a nave\n2- Trocar a nave\n3- Imprimir e sair"))
        if(answer == 1) {
            let acceleration = Number(prompt("Aceleração: "))
            spaceship.speedUp(acceleration)
            menu(spaceship)
        }else if(answer == 2) {
            spaceship = createSpaceship()
            menu(spaceship)
        }else if(answer == 3) {
            if(spaceship.type == 1) alert("Nome: " + spaceship.name + "\nQuantidade de tripulantes: " + spaceship.crewQuantity + "\nVelocidade atual: " + spaceship.currentSpeed + "\nNúmero de armas: " + spaceship.weaponQuantity)
            else alert("Nome: " + spaceship.name + "\nQuantidade de tripulantes: " + spaceship.crewQuantity + "\nVelocidade atual: " + spaceship.currentSpeed + "\nNúmero de lugares: " + spaceship.seatsQuantity)
        }
    }
}