import {
	majorityElementSort,
	majorityElementMap,
	majorityElementLinear,
} from "../../src/array-string/majority_element";

describe("majorityElement", () => {
	test("majorityElementSort - nums = [3,2,3]", () => {
		const result = majorityElementSort([3, 2, 3]);
		expect(result).toBe(3);
	});

	test("majorityElementSort - nums = [2,2,1,1,1,2,2]", () => {
		const result = majorityElementSort([2, 2, 1, 1, 1, 2, 2]);
		expect(result).toBe(2);
	});

	test("majorityElementMap - nums = [3,2,3]", () => {
		const result = majorityElementMap([3, 2, 3]);
		expect(result).toBe(3);
	});

	test("majorityElementMap - nums = [2,2,1,1,1,2,2]", () => {
		const result = majorityElementMap([2, 2, 1, 1, 1, 2, 2]);
		expect(result).toBe(2);
	});

	test("majorityElementLinear - nums = [3,2,3]", () => {
		const result = majorityElementLinear([3, 2, 3]);
		expect(result).toBe(3);
	});

	test("majorityElementLinear - nums = [2,2,1,1,1,2,2]", () => {
		const result = majorityElementLinear([2, 2, 1, 1, 1, 2, 2]);
		expect(result).toBe(2);
	});
});
