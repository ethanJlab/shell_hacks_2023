import PocketBase from 'pocketbase';
import express from 'express';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import _ from 'lodash';
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

cost_of_living_router.get('/getCity/:city', async (req, res) => {
    const city = _.words(_.startCase(req.params.city)).join('-');
  
    const { currency = 'USD' } = req.query;
  
    const response = await fetch(
      `https://www.numbeo.com/cost-of-living/in/${city}?displayCurrency=${currency}`,
    );
    if (!response.ok) {
      return res.status(response.status).send(response.statusText);
    }
    const html = await response.text();
  
    const $ = cheerio.load(html);
  
    const rows = $('body > div.innerWidth > table > tbody > tr')
      .filter((i, el) => $(el).children('td').length === 3)
      .map((i, el) =>
        $(el)
          .children()
          .map((i, el) => $(el).text().trim())
          .toArray(),
      )
      .toArray();
  
    const costs = chunkArray(rows, 3).map(([item, costWithSymbol, range]) => {
      const cost = costWithSymbol.replace(/^.*?([\d,.]+).*?$/, '$1');
      const [rangeLow, rangeHigh] = range.split('-');
      return {
        item,
        cost,
        range: {
          low: rangeLow,
          high: rangeHigh,
        },
      };
    });
    // go through the costs array, add up the total cost and number of items
    let totalCost = 0;
    let totalItems = 0;
    let tempCost;
    costs.forEach((cost) => {
        // only count the cost if the item has the words Apartment, Rent, House, or Mortgage
        if (cost.item.includes('Apartment (3 bedrooms) in City Centre')) {
            tempCost = cost.cost.replace(',', '');
            totalCost += parseFloat(tempCost);
            totalItems += 1;
        }
    });
    // calculate the average cost
    const averageCost = totalCost / totalItems;
    
    console.log(costs)
    return res.json({ city, currency, totalCost });
  });

  function chunkArray(arr, chunkSize) {
    let temp = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      temp.push(arr.slice(i, i + chunkSize));
    }
    return temp;
  }
  

export default cost_of_living_router;
