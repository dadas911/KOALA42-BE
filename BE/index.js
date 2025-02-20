import express from "express";
import sequelize from "./config/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

sequelize.sync().then(() => {
    console.log("Database connected succesfully");
    app.listen(PORT, () =>
        console.log(`Server running on: http://localhost:${PORT}`)
    );
});
