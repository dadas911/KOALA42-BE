import DataTypes from "sequelize";
import sequelize from "../config/db";
import Character from "./characters";
import Secret from "./secret";

//Define structure of Nemesis table/object using sequelize
const Nemesis = sequelize.define("Nemesis", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    character_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "character",
            key: "id",
        },
    },
    is_alive: DataTypes.BOOLEAN,
    years: DataTypes.INTEGER,
});

//Define relation between character-nemesis
Nemesis.belongsTo(Character, { foreignKey: "character_id" });
//Define relation between nemesis-secret
Nemesis.hasMany(Secret, { foreignKey: "nemesis_id" });

export default Nemesis;
