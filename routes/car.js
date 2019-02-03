import { Router } from 'express';
import carService from '../services/carService';
var carRouter = Router();

carRouter.get('/', (req, res) => {
  res.json(carService.getAll());
});

module.exports = carRouter;
