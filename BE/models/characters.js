import DataTypes from "sequelize";
import sequelize from "../config/db.js";
import Nemesis from "./nemesis.js";

//Define structure of Character table/object using sequalize
const Character = sequelize.define(
    "Character",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        gender: DataTypes.STRING,
        ability: DataTypes.STRING,
        minimal_distance: DataTypes.FLOAT,
        weight: DataTypes.FLOAT,
        born: DataTypes.DATE,
        in_space_since: DataTypes.DATE,
        beer_consumption: DataTypes.INTEGER,
        knows_the_answer: DataTypes.BOOLEAN,
    },
    { tableName: "character", timestamps: false }
);

Character.hasMany(Nemesis, { foreignKey: "character_id" });
Nemesis.belongsTo(Character, { foreignKey: "character_id" });

export default Character;
