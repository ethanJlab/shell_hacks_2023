import PocketBase from 'pocketbase';
import express from 'express';
const pb= new PocketBase('http://127.0.0.1:8090');

export const debtRouter = express.Router();

//create new debt
//POST /debt
//the data should contain name, amount, interest, category, and due_date

debtRouter.post('/create', (req, res) => {
    console.log(req.body)
    pb.collection('debts').create(req.body).then((debt) => {
        res.json(debt);
    }).catch((err) => {
        res.json(err);
    });
});

//get a debt by id
//GET /debt/:id
debtRouter.get('/:id', (req, res) => {
    console.log(req.body)
    pb.collection('debt').getOne(req.params.id).then((debt) => {
        res.json(debt);
    }).catch((err) => {
        res.json(err);
    });
}
);

//update
//PUT /debt/:id
debtRouter.put('/:id', (req, res) => {
    pb.collection('debt').update(req.params.id, req.body).then((debt) => {
        res.json(debt);
    }).catch((err) => {
        res.json(err);
    });
}
);

//delete
//DELETE /debt/:id
debtRouter.delete('/:id', (req, res) => {
    pb.collection('debt').delete(req.params.id).then((debt) => {
        res.json(debt);
    }).catch((err) => {
        res.json(err);
    });
}
);

export default debtRouter;