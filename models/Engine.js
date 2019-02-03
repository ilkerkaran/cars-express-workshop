/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  return sequelize.define(
    'Engine',
    {
      Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      FuelType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      VolumeInCC: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      PistonCount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      IsSupportTurbo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      tableName: 'Engine'
    }
  );
}
