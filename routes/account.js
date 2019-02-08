import { Router } from 'express';
import passport from 'passport';
import AccountController from '../controllers/accountController';
require('../middlewares/passport');
var controller = new AccountController();
var router = Router();

router.get('/', (req, res) => controller.getAll(req, res));
// Profile
router.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => controller.getCurrentUser(req, res)
);

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => controller.getById(req, res)
);

router.post('/login', (req, res, next) =>
  controller.getByIdAndPassword(req, res)
);

module.exports = router;
