const express = require('express');
import cors from "cors"
import helmet from 'helmet';
import bodyParser from "body-parser"
import routes from "./routes"
import database from "./database/db"


const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;


const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static('src/assets/files'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
database();
app.use('/api', routes);

app.listen(PORT, function () {
console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
});
