import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import path from 'path';
import {fileURLToPath} from 'url';

import routes from "./src/routes/index.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.set('view engine', 'ejs')
app.set('views', (`${__dirname}/views`));

//app.use(express.static(__dirname + 'public'))

app.use(json());
app.use(urlencoded({extended:false}));
app.use(cookieParser());
app.use(morgan('dev'));

app.use(
    cors({
        origin:"*", 
        credentials:true, 
        methods:['GET', 'POST', 'DELETE','UPDATE'], 
        allowedHeaders:['Origin', 'X-Request-With','Content-Type','Accept'],
    })
);

app.use((err, res, req, next) => {
    const status = err.status||500;
    const message = err.message|| err;
    console.log(err);
    res.status(status).send(message);
});

app.use("/", routes);


const errorHandler = (err, req, res, next) => {
   
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
}; 

app.use(errorHandler);


export default app;