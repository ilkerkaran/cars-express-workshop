import passport from 'passport';
import {
  ExtractJwt as ExtractJWT,
  Strategy as JWTStrategy
} from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import config from '../config';

const user = {
    id:1,
    name:'name',
    username:'user1',
    email: 'user1',
    password:'123'
};
passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    function(username, password, cb) {
      if (email == 'user1')
        return cb(null, user, {
          message: 'Logged In Successfully'
        });
      else return cb(null, false, { message: 'Incorrect email or password.' });
      //Assume there is a DB module pproviding a global UserModel
      //   return context.User.findOne({ email, password })
      //     .then(user => {
      //       if (!user) {
      //         return cb(null, false, { message: 'Incorrect email or password.' });
      //       }

      //       return cb(null, user, {
      //         message: 'Logged In Successfully'
      //       });
      //     })
      //     .catch(err => {
      //       return cb(err);
      //     });
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.jwt_secret
    },
    function(jwtPayload, cb) {
        console.log(jwtPayload);
      if (jwtPayload.data.Id == '1') return cb(null, jwtPayload.data);
      else return cb(null, false);
      //find the user in db if needed
      //   return UserModel.findOneById(jwtPayload.id)
      //     .then(user => {
      //       return cb(null, user);
      //     })
      //     .catch(err => {
      //       return cb(err);
      //     });
    }
  )
);
