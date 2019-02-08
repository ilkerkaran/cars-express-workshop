import { Router } from 'express';
import CarController from '../controllers/carController';
import jwt from 'jsonwebtoken';
import config from '../config';
import AccountController from '../controllers/accountController';
var controller = new AccountController();
var router = Router();

router.post('/login', (req, res, next) =>  controller.getByIdAndPassword(req, res));


module.exports = router;
