class SpatialStation {
    constructor(name, platformsQuantity, velocity = 0){
        this.name = name
        this.platformsQuantity = platformsQuantity
        this.velocity = velocity
    }

    speedUp(acceleration){
        this.velocity += acceleration
    }
}

let observatory = new SpatialStation("Observatório", 40)

console.log(observatory)
observatory.speedUp(10)
console.log(observatory)