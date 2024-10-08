import { removeDuplicatesByPointers } from "../../src/array-string/remove_duplicates";

describe("removeDuplicates", () => {
    test("removeDuplicatesByPointers - nums = [1,1,2]", () => {
		const result = removeDuplicatesByPointers([1, 1, 2]);
		expect(result).toBe(2);
	});

    test("removeDuplicatesByPointers - nums = [0,0,1,1,1,2,2,3,3,4]", () => {
		const result = removeDuplicatesByPointers([0,0,1,1,1,2,2,3,3,4]);
		expect(result).toBe(5);
	});
});
