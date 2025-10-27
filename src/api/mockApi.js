// src/api/mockApi.js
const basePrices = {
  GOOG: 1050,
  AMZN: 1200,
  META: 1350,
  NVDA: 1300,
  TSLA: 850,
};

export function fetchPrice(symbol) {
  return new Promise((resolve) => {
    const latency = 80 + Math.random() * 200;
    setTimeout(() => {
      const base = basePrices[symbol] ?? 1000;
      const variation = (Math.random() - 0.5) * base * 0.02;
      const price = Math.max(1, Math.round((base + variation) * 100) / 100);
      const change = Math.round(((price - base) / base) * 10000) / 100;
      resolve({ symbol, price, change });
    }, latency);
  });
}

export function fetchAllPrices() {
  const symbols = Object.keys(basePrices);
  return Promise.all(symbols.map((s) => fetchPrice(s)));
}
