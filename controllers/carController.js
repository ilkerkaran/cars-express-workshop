import context from '../models/sequelize';

class CarController {
  getAll(req, res) {
    context.CarDefinition.findAll({ raw: true }).then(carDefinitions =>
      res.json(carDefinitions)
    );
  }

  getById(req, res) {
    context.CarDefinition.findByPk(req.params.id, {
      attributes: ['Id', 'Brand', 'Model'] //object
    }).then(carDef => res.json(carDef));
  }
  getMyCar(req, res) {
    var exi = context.Car.findAll({
      where: { OwnerUserId: req.user.Id },
      attributes: ['Id', 'PlateNumber'], //object
      include: [
        { model: context.CarDefinition, attributes: ['Brand', 'Model'] }
      ]
    }).then(carArray => {
      let resultData = carArray.map(car => {
        //flatten the object
        let { CarDefinition: carDef, ...carDTO } = car.dataValues;
        carDTO.Brand = carDef.Brand;
        carDTO.Model = carDef.Model;
        return carDTO;
      });
      res.json(resultData);
    });
  }
}

export default CarController;
