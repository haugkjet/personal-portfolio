export default function handler(req, res) {
  res.status(200).json({
    assetTypes: [
      { id: "1", name: "Crypto" },
      { id: "2", name: "Cash" },
      { id: "3", name: "Stocks" },
      { id: "4", name: "Mutual Fund" },
      { id: "5", name: "Derivative" },
      { id: "6", name: "Real Estate" },
    ],
  });
}
