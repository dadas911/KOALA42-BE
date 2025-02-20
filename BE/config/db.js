import Sequelize from "sequelize";
import dotenv from "dotenv";

//Enable dotenv -> use variables from .env file
dotenv.config();

//Define DB connection
const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: "postgres",
    logging: false,
});

export default sequelize;
