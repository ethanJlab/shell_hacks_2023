import PocketBase from 'pocketbase';
import express from 'express';
const pb = new PocketBase('http://127.0.0.1:8090');
// add body parser


export const userRouter = express.Router();

// create a new user
// POST /user
// the data should contain first_name, last_name, password, income, location, Debt_IDs, and investment_IDs

userRouter.post('/create', (req, res) => {
    console.log(req.body)
    pb.collection('user').create(req.body).then((user) => {
        res.json(user);
    }).catch((err) => {
        res.json(err);
    });
});

// get a user by id
// GET /user/:id
userRouter.get('/:id', (req, res) => {
    pb.collection('user').getOne(req.params.id).then((user) => {
        res.json(user);
    }).catch((err) => {
        res.json(err);
    });
});

// update
// PUT /user/:id
userRouter.put('/:id', (req, res) => {
    pb.collection('user').update(req.params.id, req.body).then((user) => {
        res.json(user);
    }).catch((err) => {
        res.json(err);
    });
});




export default userRouter;