import express from 'express';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export const budget_items_router = express.Router();

// has item_name and cost

// create a new budget_item
// POST /budget_items
// the data should contain item_name, cost
budget_items_router.post('/create', (req, res) => {
    console.log(req.body)
    pb.collection('budget_items').create(req.body).then((budget_item) => {
        res.json(budget_item);
    }).catch((err) => {
        res.json(err);
    });
}
);

// get a budget_item by id
// GET /budget_items/:id
budget_items_router.get('/:id', (req, res) => {
    pb.collection('budget_items').getOne(req.params.id).then((budget_item) => {
        res.json(budget_item);
    }).catch((err) => {
        res.json(err);
    });
}
);

// update
// PUT /budget_items/:id
budget_items_router.put('/:id', (req, res) => {
    pb.collection('budget_items').update(req.params.id, req.body).then((budget_item) => {
        res.json(budget_item);
    }).catch((err) => {
        res.json(err);
    });
}
);

// delete
// DELETE /budget_items/:id
budget_items_router.delete('/:id', (req, res) => {
    pb.collection('budget_items').delete(req.params.id).then((budget_item) => {
        res.json(budget_item);
    }).catch((err) => {
        res.json(err);
    });
}
);

export default budget_items_router;