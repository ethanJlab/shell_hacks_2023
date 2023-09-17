import express from 'express'
import 'dotenv/config'

const baseStockURL ='https://www.alphavantage.co/query?'

const STOCKAPIKEY = process.env.STOCKAPIKEY

const vanguardTicker = 'VEGBX'

export const stocksRouter = express.Router()

// GET monthly
stocksRouter.get('/monthly', async (req, res) => {
    const url = `${baseStockURL}function=TIME_SERIES_MONTHLY&symbol=${vanguardTicker}&apikey=${STOCKAPIKEY}`
    const response = await fetch(url)
    const data = await response.json()

    res.json(data)

})

// GET weekly
stocksRouter.get('/weekly', async (req, res) => {
    const url = `${baseStockURL}function=TIME_SERIES_WEEKLY&symbol=${vanguardTicker}&apikey=${STOCKAPIKEY}`
    const response = await fetch(url)
    const data = await response.json()

    res.json(data)

})

// GET daily
stocksRouter.get('/daily', async (req, res) => {
    const url = `${baseStockURL}function=TIME_SERIES_DAILY&symbol=${vanguardTicker}&apikey=${STOCKAPIKEY}`
    const response = await fetch(url)
    const data = await response.json()

    res.json(data)

})

// GET ytd
stocksRouter.get('/ytd', async (req, res) => {
    const url = `${baseStockURL}function=TIME_SERIES_MONTHLY&symbol=${vanguardTicker}&apikey=${STOCKAPIKEY}`
    const response = await fetch(url)
    const data = await response.json()

    // get the most recent month
    const mostRecentMonth = data['Monthly Time Series'][Object.keys(data['Monthly Time Series'])[0]]

    // get the most recent month's closing price
    const mostRecentMonthClosingPrice = mostRecentMonth['4. close']

    // get the previous month a year ago
    const previousMonth = data['Monthly Time Series'][Object.keys(data['Monthly Time Series'])[12]]

    // get the previous month's closing price
    const previousMonthClosingPrice = previousMonth['4. close']

    // calculate the ytd
    const ytd = (mostRecentMonthClosingPrice - previousMonthClosingPrice) / previousMonthClosingPrice

    res.json(ytd)

})



export default stocksRouter