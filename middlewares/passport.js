import passport from 'passport';
import {
  ExtractJwt as ExtractJWT,
  Strategy as JWTStrategy
} from 'passport-jwt';
import config from '../config';


passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.jwt_secret
    },
    function(jwtPayload, cb) {
      //this makes the token self-contained
      return cb(null, jwtPayload.data);        
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
