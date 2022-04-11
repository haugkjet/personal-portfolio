export default function handler(req, res) {
  res.status(200).json({
    assetLocations: [
      { id: "1", name: "Binance" },
      { id: "2", name: "Coinbase" },
      { id: "3", name: "City Index" },
      { id: "4", name: "Bittrex" },
      { id: "5", name: "DNB" },
      { id: "6", name: "Nordax" },
    ],
  });
}
