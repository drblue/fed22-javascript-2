interface Place {
	area: number
	address: string
	rooms: number
	bathrooms: number

	getInfo: () => string
}

class House implements Place {
	area: number = -1
	address: string
	rooms: number
	bathrooms: number
	owner: string

	constructor(address: string, area: number, rooms: number, bathrooms: number) {
		this.address = address
		this.area = area
		this.rooms = rooms
		this.bathrooms = bathrooms
	}

	getInfo() {
		return `This house is ${this.area} m2, has ${this.bathrooms} bathrooms and it's address is ${this.address}.`
	}
}

class Kollo {}

const myLargeHouse = new House("Storgatan 1, Storstad", 420, 8, 5)
myLargeHouse.owner = "Pelle Svanslös"
myLargeHouse.getInfo()

const mySecondLargeHouse = new House("Smågatan 1337, Hackerby", 150, 3, 2)

console.log(myLargeHouse.getInfo())
console.log(mySecondLargeHouse.getInfo())

const myKollo = new Kollo()

console.log("typeof myLargeHouse", typeof myLargeHouse)
console.log("myLargeHouse instanceof House", myLargeHouse instanceof House)
console.log("myKollo instanceof House", myKollo instanceof House)
