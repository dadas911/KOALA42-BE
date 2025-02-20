import express from "express";
import sequelize from "./config/db.js";

//Middleware
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//Connect to the database + start app
sequelize.sync().then(() => {
    console.log("Database connected succesfully");
    app.listen(PORT, () =>
        console.log(`Server running on: http://localhost:${PORT}`)
    );
});
