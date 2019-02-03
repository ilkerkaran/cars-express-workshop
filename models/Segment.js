/* jshint indent: 2 */

export default function(sequelize, DataTypes) {
  return sequelize.define(
    'Segment',
    {
      Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'Segment'
    }
  );
}
