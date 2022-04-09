export default function handler(req, res) {
    res.status(200).json([{ name: 'Crypto'}, { name: 'Cash'},
     { name: 'Stocks'}, { name: 'Mutual Fund'}, { name: 'Derivative'}], { name: 'Real Estate'})
  }