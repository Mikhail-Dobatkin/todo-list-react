import express, {Express} from 'express'
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import routes from '../backend/routes/routes'
import http from "http";

const app:Express = express();


app.use(cors())


const uri = 'mongodb+srv://Mikhail-Dobatkin:PH15ju74Vi23@cluster0.gj6x1.mongodb.net/BackendApp-React'
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(bodyParser.json());

app.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
})

app.use('/', routes)
app.use((req, res, next) => {
    const error = new Error('not found')
    return res.status(404).json({
        message: error.message
    })
})

const httpServer = http.createServer(app)
const PORT: any = process.env.PORT || 8080
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`))