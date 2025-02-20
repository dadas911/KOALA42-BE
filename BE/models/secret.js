import DataTypes from "sequelize";
import sequelize from "../config/db";
import Nemesis from "./nemesis";

//Define structure of Secret table/object using sequelize
const Secret = sequelize.define("Secret", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nemesis_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "nemesis",
            key: "id",
        },
    },
    secret_code: DataTypes.INTEGER,
});

//Define relation between secret-nemesis
Secret.belongsTo(Nemesis, { foreignKey: "nemesis_id" });

export default Secret;
