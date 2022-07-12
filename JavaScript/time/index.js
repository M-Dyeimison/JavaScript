let depatureDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY)")
let departureDate = moment(depatureDateEntry, "DD/MM/YYYY")
let today = moment()
let dateDiff = today - departureDate
let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n 1-segundos\n 2-minutos\n 3-horas\n 4-dias")

if(chosenOption == 1) alert("Tempo de vôo: " + (Math.round(dateDiff/1000)) + " segundos")
else if(chosenOption == 2) alert("Tempo de vôo: " + (Math.round(dateDiff/1000/60)) + " minutos")
else if(chosenOption == 3) alert("Tempo de vôo: " + (Math.round(dateDiff/1000/60/60)) + " horas")
else if(chosenOption == 4) alert("Tempo de vôo: " + (Math.round(dateDiff/1000/60/60/24)) + " dias")
else alert("Opção inválida")