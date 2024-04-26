import {
	averageEvenNBy3,
	averageEvenNBy3Loop,
} from "../src/average_value_even_n_by_3";

describe("averageEvenNBy3", () => {
	test("averageEvenNBy3 - [1, 3, 6, 10, 12, 15]", () => {
		const result = averageEvenNBy3([1, 3, 6, 10, 12, 15]);
		expect(result).toBe(9);
	});

	test("averageEvenNBy3 - [1, 2, 4, 7, 10]", () => {
		const result = averageEvenNBy3([1, 2, 4, 7, 10]);
		expect(result).toBe(0);
	});

	test("averageEvenNBy3Loop - [1, 3, 6, 10, 12, 15]", () => {
		const result = averageEvenNBy3Loop([1, 3, 6, 10, 12, 15]);
		expect(result).toBe(9);
	});

	test("averageEvenNBy3Loop - [1, 2, 4, 7, 10]", () => {
		const result = averageEvenNBy3([1, 2, 4, 7, 10]);
		expect(result).toBe(0);
	});
});
