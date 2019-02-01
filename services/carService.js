//predefined data
const cars = [
  { id: 1, brand: "Audi", model: "A3", engine: "1.0 TFSI S-Tronic" },
  { id: 2, brand: "Volkswagen", model: "Polo", engine: "1.6 TDI Dsg" },
  {
    id: 3,
    brand: "Opel",
    model: "Corsa",
    engine: "1.0 Twinport Active-Shift"
  }
];

const carService = {
  //return all cars
  getAll: () => {
    return cars;
  },
  //return car without engine property
  getById: id => {
    const car = this.cars.find(car => car.id === id);
    if (car) {
      const { engine, ...carWithoutEngine } = car;
      return carWithoutEngine;
    }

    return cars;
  }

  //predefined data
};

export default carService;
