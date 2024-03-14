import { twoSumByDiff, twoSumByLoop } from "../src/two_sum";

describe("twoSum", () => {
	test("twoSumByDiff - [2, 7, 11, 15], 9 = [0, 1]", () => {
		const result = twoSumByDiff([2, 7, 11, 15], 9);
		expect(result.sort()).toEqual([0, 1]);
	});

	test("twoSumByLoop - [2, 7, 11, 15], 9 = [0, 1]", () => {
		const result = twoSumByLoop([2, 7, 11, 15], 9);
		expect(result.sort()).toEqual([0, 1]);
	});

	test("twoSumByDiff - [3, 2, 4], 6 = [1, 2]", () => {
		const result = twoSumByDiff([3, 2, 4], 6);
		expect(result.sort()).toEqual([1, 2]);
	});
	test("twoSumByLoop - [3, 2, 4], 6 = [1, 2]", () => {
		const result = twoSumByLoop([3, 2, 4], 6);
		expect(result.sort()).toEqual([1, 2]);
	});

	test("twoSumByDiff - [3, 3], 6 = [0, 1]", () => {
		const result = twoSumByDiff([3, 3], 6);
		expect(result.sort()).toEqual([0, 1]);
	});

	test("twoSumByLoop - [3, 3], 6 = [0, 1]", () => {
		const result = twoSumByLoop([3, 3], 6);
		expect(result.sort()).toEqual([0, 1]);
	});
});
