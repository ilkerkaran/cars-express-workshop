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
    context.Car.findAll({
      where: { OwnerUserId: req.user.Id },
      attributes: ['Id', 'PlateNumber'], //object
      include: [
        // { model: context.CarDefinition, attributes: ['Brand', 'Model'] },
        // { model: context.User, attributes: [''] },
        // { model: context.Subjects, attributes: ['Name'] }
      ]
    }).then(carDef => res.json(carDef));
  }
}

export default CarController;
