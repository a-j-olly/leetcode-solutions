import {
	mergeSortedArray,
	mergeSortedArrayPointers,
} from "../../src/array-string/merge_sorted_array";

describe("mergeSortedArray", () => {
	test("mergeSortedArray - nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", () => {
		const result = mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
		expect(result).toStrictEqual([1, 2, 2, 3, 5, 6]);
	});

	test("mergeSortedArray - nums1 = [1], m = 1, nums2 = [], n = 0", () => {
		const result = mergeSortedArray([1], 1, [], 0);
		expect(result).toStrictEqual([1]);
	});

	test("mergeSortedArray - nums1 = [0], m = 0, nums2 = [1], n = 1", () => {
		const result = mergeSortedArray([0], 0, [1], 1);
		expect(result).toStrictEqual([1]);
	});

	test("mergeSortedArrayPointers - nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", () => {
		const result = mergeSortedArrayPointers([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
		expect(result).toStrictEqual([1, 2, 2, 3, 5, 6]);
	});

	test("mergeSortedArrayPointers - nums1 = [1], m = 1, nums2 = [], n = 0", () => {
		const result = mergeSortedArrayPointers([1], 1, [], 0);
		expect(result).toStrictEqual([1]);
	});

	test("mergeSortedArrayPointers - nums1 = [0], m = 0, nums2 = [1], n = 1", () => {
		const result = mergeSortedArrayPointers([0], 0, [1], 1);
		expect(result).toStrictEqual([1]);
	});
});
