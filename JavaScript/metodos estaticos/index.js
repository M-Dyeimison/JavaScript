class ResourceProcessorStation {
    constructor(name, monthlyProcessing) {
        this.name = name
        this.monthlyProcessing = monthlyProcessing
    }

    static calculateProcessInHours(monthlyProcessing, hours) {
        return monthlyProcessing / 720 * hours
    }
}

let totalProcessing = ResourceProcessorStation.calculateProcessInHours(500, 6)
console.log(totalProcessing)


let processor = new ResourceProcessorStation("Gaia", 2000)
//gera erro
//processor.calculateProcessInHours(processor.monthlyProcessing, 10)

let totalPrecessed = ResourceProcessorStation.calculateProcessInHours(processor.monthlyProcessing, 10)
console.log(totalPrecessed)