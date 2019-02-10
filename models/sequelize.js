import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../config';
import CarModel from './Car';
import CarDefinitionModel from './CarDefinition';
import UserModel from './User';
const basename = path.basename(module.filename);
const db = {};

const sequelize = new Sequelize(
  config.databaseConfiguration.database,
  config.databaseConfiguration.username,
  config.databaseConfiguration.password,
  {
    host: config.databaseConfiguration.host,
    dialect: config.databaseConfiguration.dialect,
    logging: config.databaseConfiguration.logging,
    dialectOptions: {
      encrypt: config.databaseConfiguration.encrypt
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//read models from file dir and fill it with reflection.
// read sync files
// fs.readdirSync(__dirname)
//   .filter(
//     file =>
//       file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
//   )
//   .forEach(file => {
//     const model = sequelize.import(path.join(__dirname, file));
//     db[model.name] = model;
//   });

// //associate
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

//Model definitions
db.Car = CarModel(sequelize, Sequelize);
db.User = UserModel(sequelize, Sequelize);
db.CarDefinition = CarDefinitionModel(sequelize, Sequelize);

//Associations
//User
db.User.hasMany(db.Car);
//Car
db.Car.belongsTo(db.User);
db.Car.belongsTo(db.CarDefinition);
//CarDefinition
db.CarDefinition.hasMany(db.Car);
//Segment

export default db;
