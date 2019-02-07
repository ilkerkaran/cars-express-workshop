import { Router } from 'express';
import CarController from '../controllers/carController';

var controller = new CarController();
var carRouter = Router();

carRouter.get('/', (req, res) => controller.getAll(req, res));

module.exports = carRouter;
