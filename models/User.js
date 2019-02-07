/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  return sequelize.define(
    'User',
    {
      Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'User',
          key: 'Id'
        }
      },
      UserName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Password: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      tableName: 'User',
      timestamps: false
    }
  );
}
