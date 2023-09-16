import PocketBase from 'pocketbase';
import express from 'express';
const pb = new PocketBase('http://127.0.0.1:8090');
// add body parser


export const userRouter = express.Router();

// create a new user
// POST /user
// the data should contain first_name, last_name, password, income, location, Debt_IDs, and investment_IDs

userRouter.post('/', (req, res) => {
    console.log(req.body)
    pb.collection('user').create(req.body).then((user) => {
        res.json(user);
    }).catch((err) => {
        res.json(err);
    });
});

export default userRouter;