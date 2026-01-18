export function loadPools() {
  console.log("Loading liquidity pools...");

  return [
    {
      name: "ETH-USDC Pool",
      reserveA: 500000,
      reserveB: 300000
    }
  ];
}
