let spaceship = {
    name: "Demeter",
    type: "Extração",
    maxCrew: 20,
    turnOn: function() {
        console.log("Preparando propulsão...")
        console.log("Ligando computador de bordo")
    }
}

spaceship.turnOn()

spaceship.velocity = 0
spaceship.speedUp = function(acceleration) {this.velocity += acceleration}

console.log(spaceship)
spaceship.speedUp(100)
console.log(spaceship)