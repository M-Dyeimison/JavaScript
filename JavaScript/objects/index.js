let rocketship = new Object();

console.log(rocketship)

let spaceship = {
    name: "Fenix",
    crewQuatity: 7,
    type: "Batalha"
}

console.log(spaceship.name)
console.log(spaceship["type"])

spaceship.isHitched = true
spaceship["shieldLevel"] = 100

console.log(spaceship)

let spacialStation = {
    name: "Fox",
    platformsQuantity: 10,
    "new name": "Estelar",
    2: "Descoberta"
}

console.log(spacialStation["2"])
console.log(spacialStation)

let spaceships = [
    {name: "Elemental", crewQuatity: 10},
    {name: "Sugar", crewQuatity: 5},
    {name: "Wildlife", crewQuatity: 15}
]

console.log(spaceships[1].crewQuatity)
console.log(spaceships[1])

console.log(spaceships.map(element => {return element.name}))

spaceships.forEach(spaceship => {
    console.log(spaceship.name + " tem " + spaceship.crewQuatity + " tripulantes.")
})

let ship = {
    name: "Titanic",
    maxCrew: 34534534534,
    captain: {
        name: "Hugo Trent",
        age: 50
    }
}

console.log(ship.captain.name)