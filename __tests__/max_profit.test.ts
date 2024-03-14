import { maxProfitByLoop, maxProfitByMinPrice } from "../src/max_profit";

describe("maxProfit", () => {
	test("maxProfitByLoop - [7,1,5,3,6,4] = 5", () => {
		const result = maxProfitByLoop([7, 1, 5, 3, 6, 4]);
		expect(result).toBe(5);
	});

    test("maxProfitByMinPrice - [7,1,5,3,6,4] = 5", () => {
		const result = maxProfitByMinPrice([7, 1, 5, 3, 6, 4]);
		expect(result).toBe(5);
	});

	test("maxProfitByLoop - [7,6,4,3,1] = 0", () => {
		const result = maxProfitByLoop([7,6,4,3,1]);
		expect(result).toBe(0);
	});

    test("maxProfitByMinPrice - [7,6,4,3,1] = 0", () => {
		const result = maxProfitByMinPrice([7,6,4,3,1]);
		expect(result).toBe(0);
	});
});
