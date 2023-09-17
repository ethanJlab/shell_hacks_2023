import PocketBase from 'pocketbase';
import express from 'express';
const pb = new PocketBase('http://127.0.0.1:8090');

export const investmentRouter = express.Router();

// create a new investment
// POST /investment
// the data should contain index_fund_ID,shares, initial_dollar_amount, initial_investment_date

investmentRouter.post('/create', (req, res) => {
    console.log(req.body)
    pb.collection('investment').create(req.body).then((investment) => {
        res.json(investment);
    }).catch((err) => {
        res.json(err);
    });
});

// get a investment by id
// GET /investment/:id
investmentRouter.get('/:id', (req, res) => {
    pb.collection('investment').getOne(req.params.id).then((investment) => {
        res.json(investment);
    }).catch((err) => {
        res.json(err);
    });
}
);

// update
// PUT /investment/:id
investmentRouter.put('/:id', (req, res) => {
    pb.collection('investment').update(req.params.id, req.body).then((investment) => {
        res.json(investment);
    }).catch((err) => {
        res.json(err);
    });
});

// delete
// DELETE /investment/:id
investmentRouter.delete('/:id', (req, res) => {
    pb.collection('investment').delete(req.params.id).then((investment) => {
        res.json(investment);
    }).catch((err) => {
        res.json(err);
    });
}
);

// add investment ID to the list of investment IDs
// PUT /investment/:id/addInvestment
investmentRouter.put('/:id/addInvestment', (req, res) => {
    pb.collection('investment').update(req.params.id, { $push: { investment_IDs: req.body.investment_IDs } }).then((investment) => {
        res.json(investment);
    }).catch((err) => {
        res.json(err);
    });
});

// gets monthly stock data
investmentRouter.get('/getMonthlyStockData/:stock', async (req, res) => {
    const stock = req.params.stock;

    // make an http request to
    // https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=VEGBX&apikey=27SVLL2I9TYG0S2Y

    const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${stock}&apikey=27SVLL2I9TYG0S2Y`
    );
    if (!response.ok) {
        return res.status(response.status).send(response.statusText);
    }
    const json = await response.json();

    res.json(json);
});

// ytd
investmentRouter.get('/getYTD/:stock', async (req, res) => {
    const stock = req.params.stock;

    // make an http request to

    const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${stock}&apikey=27SVLL2I9TYG0S2Y`
    );

    if (!response.ok) {
        return res.status(response.status).send(response.statusText);
    }
    const json = await response.json();
    // compare the last month to the year before
    const lastMonth = json['Monthly Time Series'][Object.keys(json['Monthly Time Series'])[0]];
    const yearBefore = json['Monthly Time Series'][Object.keys(json['Monthly Time Series'])[12]];
    const ytd = (lastMonth['4. close'] - yearBefore['4. close']) / yearBefore['4. close'];

    res.json(ytd);
});

//

export default investmentRouter;