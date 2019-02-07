import context from '../models/sequelize';

class CarController {
  getAll(req, res) {
    context.CarDefinition.findAll({ raw: true }).then(carDefinitions =>
      res.json(carDefinitions)
    );
  }

  getById(id) {
    const car = this.cars.find(car => car.id === id);
    if (car) {
      const { engine, ...carWithoutEngine } = car;
      return carWithoutEngine;
    }

    return cars;
  }
}

export default CarController;
