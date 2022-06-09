const { describe, it } = require('mocha')
const CarService = require('../../src/service/carService')

const { join } = require('path')

const carsDatabase = join(__dirname, './../../database', 'cars.json')
describe('CarService Suite Tests', () => {
  let carService = {}
  before(() => {
    carService = new CarService({
      cars: carsDatabase
    })
  })
  it('given a carCategory it should return an available car', async () => {
    const result = await carService.test('54f82772-3e18-42e9-b6d1-3d4dc4951803')
    console.log('result', result)
  })
})