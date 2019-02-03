import Sequelize from 'sequelize';
import CarModel from '../models/Car';
import CarDefinitionModel from '../models/CarDefinition';
import EngineModel from '../models/Engine';
import SegmentModel from '../models/Segment';
import UserModel from '../models/User';

// const sequelize = new Sequelize('CarNode', 'sa', 'Ej123456!', {
//   host: 'localhost',
//   dialect: 'mssql',
//   logging: true
// });

const sequelize = new Sequelize({
  dialect: 'mssql',
  dialectModulePath: 'sequelize-msnodesqlv8',
  dialectOptions: {
    //   driver: 'SQL Server Native Client 11.0',
    instanceName: 'UNDERCITY'
  },
  host: '127.0.0.1',
  port: 1433,
  username: 'sa',
  password: 'Ej123456!',
  database: 'NodeCar'
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// model instances to export.
const User = UserModel(sequelize, Sequelize);
const Car = CarModel(sequelize, Sequelize);
const CarDefinition = CarDefinitionModel(sequelize, Sequelize);
const Segment = SegmentModel(sequelize, Sequelize);
const Engine = EngineModel(sequelize, Sequelize);

//for code-first approach
// sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })

export default {
  User,
  Car,
  CarDefinition,
  Segment,
  Engine,
  kek: () => console.log(!!sequelize)
};
