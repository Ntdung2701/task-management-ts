import express, { Express } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";
import cors from "cors";
import mainV1Router from "./api/v1/router/index.router";
dotenv.config();
database.connect();
const app: Express = express();
const port: number | string = process.env.PORT || 3000;


// const corsoptions = {
//     origin: 'http://example.com',
//     optionsSuccessStatus: 200
// }
// app.use(cors(corsoptions));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mainV1Router(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});