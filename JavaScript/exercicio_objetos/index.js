let spaceship = {
    name: prompt("Digite o nome da nave: "),
    type: prompt("Digite o tipo da nave: "),
    velocity: 0,
    maxVelocity: Number(prompt("Digite a velocidade máxima da nave: "))
}

function menu(spaceship) {
    let question = ""
    let i = true
    while(i){
        question = prompt(" 1. Acelerar\n 2. Parar\n 3. Mostrar menu")
        if(question=="1" || question=="2"){
            if(question == "2"){
            alert("Desacelerando a nave.")
            spaceship.velocity = 0
            break
            }

            if(question == "1"){
                let acceleration = Number(prompt("Quanto deseja acelerar: "))
                spaceship.velocity += acceleration
                if(spaceship.velocity > spaceship.maxVelocity) alert("VELOCIDADE MÁXIMA EXCEDIADA!!!!!!!!\n Velocidade atual: " + spaceship.velocity + "km/s")
            }
        }else break
    }
}

menu(spaceship)