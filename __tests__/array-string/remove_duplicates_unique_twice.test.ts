import { removeDuplicatesByPointers, removeDuplicates } from "../../src/array-string/remove_duplicates_unique_twice";

describe("removeDuplicatesUniqueTwice", () => {
	test("removeDuplicatesUniqueTwice - nums = [1,1,1,2,2,3]", () => {
		const result = removeDuplicatesByPointers([1, 1, 1, 2, 2, 3]);
		expect(result).toBe(5);
	});

	test("removeDuplicatesUniqueTwice - nums = [0,0,1,1,1,1,2,3,3]", () => {
		const result = removeDuplicatesByPointers([0, 0, 1, 1, 1, 1, 2, 3, 3]);
		expect(result).toBe(7);
	});

	test("removeDuplicatesUniqueTwice - nums = [1,1,1,2,2,3]", () => {
		const result = removeDuplicates([1, 1, 1, 2, 2, 3]);
		expect(result).toBe(5);
	});

	test("removeDuplicatesUniqueTwice - nums = [0,0,1,1,1,1,2,3,3]", () => {
		const result = removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
		expect(result).toBe(7);
	});
});
