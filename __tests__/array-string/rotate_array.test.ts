import { rotateArray } from "../../src/array-string/rotate_array";

describe("rotateArray", () => {
	test("rotateArray - nums = [1,2,3,4,5,6,7], k = 3", () => {
		const result = rotateArray([1, 2, 3, 4, 5, 6, 7], 3);
		expect(result).toStrictEqual([5, 6, 7, 1, 2, 3, 4]);
	});

	test("rotateArray - nums = [-1,-100,3,99], k = 2", () => {
		const result = rotateArray([-1, -100, 3, 99], 2);
		expect(result).toStrictEqual([3, 99, -1, -100]);
	});
});
