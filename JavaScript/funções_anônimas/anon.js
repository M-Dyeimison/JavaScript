let doubleSpeed = function(velocity) {
    return velocity * 2
}

let newSpeed = doubleSpeed(100)
console.log(newSpeed)

console.log(speedUp(60,10))
console.log(doubleSpeed(50))

function speedUp(velocity, acceleration){
    return velocity + acceleration
}