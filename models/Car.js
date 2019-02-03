/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  return sequelize.define(
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
      tableName: 'Car'
    }
  );
}
