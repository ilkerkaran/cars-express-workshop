import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from '../config';
const basename = path.basename(module.filename);
const db = {};

const sequelize = new Sequelize(
  config.databaseConfiguration.database,
  config.databaseConfiguration.username,
  config.databaseConfiguration.password,
  {
    host: config.databaseConfiguration.host,
    //port: 1433,
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

// read sync files
fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

//associate
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
