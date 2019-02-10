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
  async (req, res) => {
    let myRes = await controller.getMyCar(req, res);
    console.log('could catch the little scam');
    // console.log(myRes);
  }
);
carRouter.get('/:id', (req, res) => controller.getById(req, res));
module.exports = carRouter;
