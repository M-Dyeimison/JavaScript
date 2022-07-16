const slow = velocity => {
    while(velocity > 0 && (velocity - 20) >=  0){
        alert("Velocidade atual: " + velocity + "km/s\n")
        velocity -= 20
    }
}

function slowdown(spaceshipVelocity, slow) {
    slow(spaceshipVelocity)
    alert("A nave está parada e as comportas podem ser abertas")
}

function slowdown2(spaceshipVelocity, slow) {
    spaceshipVelocity = 200
    slow(spaceshipVelocity)
    alert("AAAAAAAAAAAAAAAAAAAAAAAAAAaaaaahhhhhhhhh")
}

let spaceshipVelocity = 150

slowdown(spaceshipVelocity, slow)
slowdown2(spaceshipVelocity, velocity => {
    while(velocity > 0 && (velocity - 20) >=  0){
        alert("Velocidade atual: " + velocity + "km/s\n")
        velocity -= 20
    }
})
