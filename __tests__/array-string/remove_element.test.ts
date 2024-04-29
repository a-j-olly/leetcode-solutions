import { removeElementSplice, removeElementReplace } from "../../src/array-string/remove_element";
describe("removeElement", () => {
	test("removeElement - nums = [3,2,2,3], val = 3", () => {
		const result = removeElementSplice([3, 2, 2, 3], 3);
		expect(result).toBe(2);
	});

	test("removeElement - nums = [0,1,2,2,3,0,4,2], val = 2", () => {
		const result = removeElementSplice([0, 1, 2, 2, 3, 0, 4, 2], 2);
		expect(result).toBe(5);
	});

    test("removeElement - nums = [3,2,2,3], val = 3", () => {
		const result = removeElementReplace([3, 2, 2, 3], 3);
		expect(result).toBe(2);
	});

	test("removeElement - nums = [0,1,2,2,3,0,4,2], val = 2", () => {
		const result = removeElementReplace([0, 1, 2, 2, 3, 0, 4, 2], 2);
		expect(result).toBe(5);
	});
});
