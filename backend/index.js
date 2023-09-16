import express from 'express';
import { Router } from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser'
import {auth} from 'express-openid-connect';
const router = Router();

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'jfghujfhjgvfuivdjnvisndi',
    baseURL: 'http://localhost:5000',
    clientID: 'h7C3ao2SQuA5pX2I54fP2Pa7lER1lbd3',
    issuerBaseURL: 'https://dev-xhc2dcreaqasyjnj.us.auth0.com'
};


const app = express();
const port = 5000;

// set the views engine and views path
app.set('views', path.join(import.meta.url, '..', 'views'));
app.set('view engine', 'jade');

// put the router variables here
import exampleRouter from './routes/example.js';
import userRouter from './routes/user.js';
import debtRouter from './routes/debt.js';
import investmentRouter from './routes/investment.js';
import cost_of_living_router from './routes/cost_of_living.js';
import budget_items_router from './routes/budget_items.js';
import stocksRouter from './routes/stocks.js';
// initialize the app with cors
app.use(cors());
app.use(auth(config));

app.use(bodyParser.json())

// define the routes
app.use('/example', exampleRouter);
app.use('/user', userRouter);
app.use('/debts', debtRouter);
app.use('/investment', investmentRouter);
app.use('/cost_of_living', cost_of_living_router);
app.use('/budget_items', budget_items_router);
app.use('/stocks', stocksRouter);


const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });



export default router;
