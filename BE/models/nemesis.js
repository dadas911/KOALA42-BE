import DataTypes from "sequelize";
import sequelize from "../config/db.js";
import Secret from "./secret.js";

//Define structure of Nemesis table/object using sequelize
const Nemesis = sequelize.define(
    "Nemesis",
    {
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
    },
    { tableName: "nemesis", timestamps: false }
);

Nemesis.hasMany(Secret, { foreignKey: "nemesis_id" });
Secret.belongsTo(Nemesis, { foreignKey: "nemesis_id" });

export default Nemesis;
