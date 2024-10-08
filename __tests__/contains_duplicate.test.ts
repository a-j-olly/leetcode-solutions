import { containsDuplicateByMap, containsDuplicateByObj, containsDuplicateBySet, containsDuplicateBySetAlt, containsDuplicateBySort } from "../src/contains_duplicate";


describe("containsDuplicate", () => {
	test("containsDuplicateBySet - [1,2,3,1] = true", () => {
		const result = containsDuplicateBySet([1,2,3,1]);
		expect(result).toBe(true);
	});

    test("containsDuplicateBySet - [1,2,3,4] = false", () => {
		const result = containsDuplicateBySet([1,2,3,4]);
		expect(result).toBe(false);
	});

	test("containsDuplicateBySet - [1,1,1,3,3,4,3,2,4,2] = true", () => {
		const result = containsDuplicateBySet([1,1,1,3,3,4,3,2,4,2]);
		expect(result).toBe(true);
	});

    test("containsDuplicateBySetAlt - [1,2,3,1] = true", () => {
		const result = containsDuplicateBySetAlt([1,2,3,1]);
		expect(result).toBe(true);
	});

    test("containsDuplicateBySetAlt - [1,2,3,4] = false", () => {
		const result = containsDuplicateBySetAlt([1,2,3,4]);
		expect(result).toBe(false);
	});

	test("containsDuplicateBySetAlt - [1,1,1,3,3,4,3,2,4,2] = true", () => {
		const result = containsDuplicateBySetAlt([1,1,1,3,3,4,3,2,4,2]);
		expect(result).toBe(true);
	});

    test("containsDuplicateByMap - [1,2,3,1] = true", () => {
		const result = containsDuplicateByMap([1,2,3,1]);
		expect(result).toBe(true);
	});

    test("containsDuplicateByMap - [1,2,3,4] = false", () => {
		const result = containsDuplicateByMap([1,2,3,4]);
		expect(result).toBe(false);
	});

	test("containsDuplicateByMap - [1,1,1,3,3,4,3,2,4,2] = true", () => {
		const result = containsDuplicateByMap([1,1,1,3,3,4,3,2,4,2]);
		expect(result).toBe(true);
	});

    test("containsDuplicateByObj - [1,2,3,1] = true", () => {
		const result = containsDuplicateByObj([1,2,3,1]);
		expect(result).toBe(true);
	});

    test("containsDuplicateByObj - [1,2,3,4] = false", () => {
		const result = containsDuplicateByObj([1,2,3,4]);
		expect(result).toBe(false);
	});

	test("containsDuplicateByObj - [1,1,1,3,3,4,3,2,4,2] = true", () => {
		const result = containsDuplicateByObj([1,1,1,3,3,4,3,2,4,2]);
		expect(result).toBe(true);
	});

    test("containsDuplicateBySort - [1,2,3,1] = true", () => {
		const result = containsDuplicateBySort([1,2,3,1]);
		expect(result).toBe(true);
	});

    test("containsDuplicateBySort - [1,2,3,4] = false", () => {
		const result = containsDuplicateBySort([1,2,3,4]);
		expect(result).toBe(false);
	});

	test("containsDuplicateBySort - [1,1,1,3,3,4,3,2,4,2] = true", () => {
		const result = containsDuplicateBySort([1,1,1,3,3,4,3,2,4,2]);
		expect(result).toBe(true);
	});
});
