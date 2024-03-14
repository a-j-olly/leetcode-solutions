import { twoSumBinary } from "../src/two_sum_binary";

describe("twoSumBinary", () => {
	test("twoSumBinary - 1 + 2 = 3", () => {
		const result = twoSumBinary(1, 2);
		expect(result).toBe(3);
	});

	test("twoSumBinary - 2 + 3 - 5", () => {
		const result = twoSumBinary(2, 3);
		expect(result).toBe(5);
	});

    test("twoSumBinary - 9 + 5 - 14", () => {
		const result = twoSumBinary(9, 5);
		expect(result).toBe(14);
	});
});
