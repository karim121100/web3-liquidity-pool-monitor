export function analyzeHealth(pool) {
  const ratio = pool.reserveA / pool.reserveB;

  return {
    reserveRatio: ratio.toFixed(2),
    status: ratio > 1 ? "Balanced" : "Imbalanced"
  };
}
