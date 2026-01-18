export function generateReport(pool, swap, health) {
  console.log("----- Pool Report -----");
  console.log("Pool:", pool.name);
  console.log("Reserves:", pool.reserveA, "/", pool.reserveB);
  console.log("Swap In:", swap.amountIn);
  console.log("Estimated Out:", swap.estimatedOut);
  console.log("Price Impact:", swap.priceImpact);
  console.log("Health Status:", health.status);
  console.log("------------------------");
}
