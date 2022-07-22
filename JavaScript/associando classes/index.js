class Capitain {
    constructor(name, age, flightHours){
        this.name = name
        this.age = age
        this.flightHours = flightHours
    }
}

class Spaceship {
    constructor(name, crewQuatity, capitainName, capitainAge, capitainFlightHours) {
        this.name = name
        this.crewQuatity = crewQuatity
        this.capitain = new Capitain(capitainName, capitainAge, capitainFlightHours)
    }
}

let spaceship = new Spaceship("Ártemis", 13, "Will Grey", 45, 15000)
console.log(spaceship.capitain.name)