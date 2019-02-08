import context from '../models/sequelize';
import jwt from 'jsonwebtoken';
import config from '../config';
class AccountController {
  getAll(req, res) {
    context.User.findAll({ raw: true }).then(user => res.json(user));
  }

  getCurrentUser(req, res) {
    context.User.findByPk(req.user.Id).then(user => res.json(user));
  }
  getById(req, res) {
    context.User.findByPk(req.params.id).then(user => res.json(user));
  }

  getByIdAndPassword(req, res) {
    context.User.findOne({
      plain: true,
      where: { UserName: req.body.username, password: req.body.password }
    }).then(user => {
      if (user) {
        const token = jwt.sign({ data: user }, config.jwt_secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: `Bearer ${token}`,
          user: {
            id: user.Id,
            username: user.UserName
          }
        });
      } else {
        res.status(401).send('Invalid username or password.');
      }
    });
  }
}

export default AccountController;
