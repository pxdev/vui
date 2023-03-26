import {cars} from '@/db.json'

export default defineEventHandler((event) => {

    const {city} = event.context.params

    let filteredCars = []

    const {make} = getQuery(event)

    filteredCars = cars.filter((car) => {
        return car.city.toLowerCase() === city.toLowerCase()
    })

    if (make) {
        filteredCars = cars.filter((car) => {
            return car.make.toLowerCase() === make.toLowerCase()
        })
    }


    return filteredCars
})
