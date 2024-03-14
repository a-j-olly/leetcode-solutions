// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// O(n^2)
export function maxProfitByLoop(prices: number[]): number {
	let maxProfit: number = 0;
	for (let i = 0; i < prices.length; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			if (prices[j] - prices[i] > maxProfit) {
				maxProfit = prices[j] - prices[i];
			}
		}
	}
	return maxProfit;
}

// O(n)
export function maxProfitByMinPrice(prices: number[]): number {
	let maxProfit: number = 0;
	let minPrice: number = prices[0];
	for (let i = 0; i < prices.length; i++) {
		let currPrice = prices[i];
		if (currPrice < minPrice) {
			minPrice = prices[i];
		} else {
			maxProfit = Math.max(maxProfit, currPrice - minPrice);
		}
	}
	return maxProfit;
}
