const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('pokemon', {
        ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Imagen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Vida: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Ataque: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Defensa: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Velocidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Altura: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Peso: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    });
}