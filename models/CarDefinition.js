/* jshint indent: 2 */

export default (sequelize, DataTypes) => {
  var CarDefinition = sequelize.define(
    'CarDefinition',
    {
      Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      Brand: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Model: {
        type: DataTypes.STRING,
        allowNull: false
      },
      SegmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Segment',
          key: 'Id'
        }
      },
      EngineId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Engine',
          key: 'Id'
        }
      }
    },
    {
      tableName: 'CarDefinition',
      timestamps: false,
      classMethods: {
        associate: function(models) {
          // associations can be defined here
          CarDefinition.hasMany(models.CarDefinition, { as: 'Cars' });
        }
      }
    }
  );
  return CarDefinition;
};
