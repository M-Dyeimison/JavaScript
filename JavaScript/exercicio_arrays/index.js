const hitchedSpaceships = [["Fenix", 8, true], ["Golias", 10, true], ["Helmet", 5, false], ["Elemental", 3, true], ["Darwin", 15, false]]

let filterCrew = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {return spaceship[0]})

let filterSpaceships = hitchedSpaceships.findIndex(spaceship => {return spaceship[2] == false})

let upperCase = hitchedSpaceships.map(spaceships => {return spaceships[0].toUpperCase()})

let message = "Espaçonave com mais de 9 tripulantes: " + filterCrew.join(", ")
message += "\nPlataforma com processo de engate: " + (filterSpaceships + 1)
message += "\nEspaçonaves destacadas: " + upperCase.join(", ")

alert(message)