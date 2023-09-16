import PocketBase from 'pocketbase';
import express from 'express';
const pb= new PocketBase('http://127.0.0.1:8090');

export const cost_of_living_router = express.Router();

// has an area :string name and a cost :number

// create a new cost
// POST /cost_of_living
// the data should contain area, cost
cost_of_living_router.post('/create', (req, res) => {
    console.log(req.body)
    pb.collection('debt').create(req.body).then((debt) => {
        res.json(debt);
    }).catch((err) => {
        res.json(err);
    });
});

// get a cost by id
// GET /cost_of_living/:id
cost_of_living_router.get('/:id', (req, res) => {
    pb.collection('debt').getOne(req.params.id).then((debt) => {
        res.json(debt);
    }).catch((err) => {
        res.json(err);
    });
}
);

// update
// PUT /cost_of_living/:id
cost_of_living_router.put('/:id', (req, res) => {
    pb.collection('debt').update(req.params.id, req.body).then((debt) => {
        res.json(debt);
    }).catch((err) => {
        res.json(err);
    });
}
);

// delete
// DELETE /cost_of_living/:id
cost_of_living_router.delete('/:id', (req, res) => {
    pb.collection('debt').delete(req.params.id).then((debt) => {
        res.json(debt);
    }).catch((err) => {
        res.json(err);
    });
}
);

export default cost_of_living_router;
