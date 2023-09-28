const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('types', {
        ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
}