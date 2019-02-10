import { Router } from 'express';
import passport from 'passport';
import CarController from '../controllers/carController';
require('../middlewares/passport');
var controller = new CarController();
var carRouter = Router();

carRouter.get('/', (req, res) => controller.getAll(req, res));
carRouter.get(
  '/mycar',
  passport.authenticate('jwt', { session: false }),
  (req, res) => controller.getMyCar(req, res)
);
carRouter.get('/:id', (req, res) => controller.getById(req, res));
module.exports = carRouter;
