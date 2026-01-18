export function simulateSwap(pool, amountIn) {
  console.log("Simulating swap in pool:", pool.name);

  const priceImpact = (amountIn / pool.reserveA) * 100;

  return {
    amountIn,
    estimatedOut: amountIn * 0.98,
    priceImpact: priceImpact.toFixed(2) + "%"
  };
}
