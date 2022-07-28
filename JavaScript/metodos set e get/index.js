class TransportSpaceship{
    constructor(name){
        this.name = name
        this.currentVelocity = 0
    }

    set velocity(newVelocity){
        if(newVelocity > 120){
            this.currentVelocity = 120
        }else{
            this.currentVelocity = newVelocity
        }
    }
}

let spaceship = new TransportSpaceship("Transportador")
spaceship.velocity = 130

console.log(spaceship)

class ResourcePrcessStation {
    constructor(name, monthlyProcessedLoad) {
        this.name = name
        this.monthlyProcessedLoad = monthlyProcessedLoad
    }

    get weeklyProcessedLoad() {
        return this.monthlyProcessedLoad/4
    }
}

let resourcePrecesser = new ResourcePrcessStation("Gaia", 500)
console.log(resourcePrecesser.weeklyProcessedLoad)

resourcePrecesser.monthlyProcessedLoad = 600

console.log(resourcePrecesser.weeklyProcessedLoad)