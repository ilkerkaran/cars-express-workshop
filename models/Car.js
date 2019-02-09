/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  var Car = sequelize.define(
    'Car',
    {
      Id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      CarDefinitionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'CarDefinition',
          key: 'Id'
        }
      },
      OwnerUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'Id'
        }
      },
      PlateNumber: {
        type: DataTypes.STRING,
        allowNull: false
      },
      OwnershipDate: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      tableName: 'Car',
      classMethods: {
        associate: function(models) {
          // associations can be defined here
         Car.belongsTo(models.CarDefinition, {foreignKey: 'CarDefinitionId'});
        }
      }
    }
  );
  return Car;
}
