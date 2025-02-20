import express from "express";
import sequelize from "./config/db.js";
import router from "./routes/character_route.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/characters", router);

sequelize
    .authenticate()
    .then(() => {
        console.log("Database connected successfully");
        app.listen(PORT, () =>
            console.log(`Server running on: http://localhost:${PORT}`)
        );
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });
