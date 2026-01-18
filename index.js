import { connectRPC } from "./rpc.client.js";
import { loadPools } from "./pool.registry.js";
import { simulateSwap } from "./swap.simulator.js";
import { analyzeHealth } from "./health.analyzer.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Liquidity Pool Monitor");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const pools = loadPools();

const swapResult = simulateSwap(pools[0], 100);
const health = analyzeHealth(pools[0]);

generateReport(pools[0], swapResult, health);
