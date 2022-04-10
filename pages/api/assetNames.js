export default function handler(req, res) {
  res.status(200).json({
    assetNames: [
      { id: "1", name: "BTC" },
      { id: "2", name: "ETH" },
      { id: "3", name: "SOL" },
      { id: "4", name: "ADA" },
      { id: "5", name: "XRM" },
      { id: "6", name: "USDT" },
    ],
  });
}
