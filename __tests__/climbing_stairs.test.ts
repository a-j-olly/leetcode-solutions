import {
	climbStairsByLoop,
	climbStairsByRecursion,
} from "../src/climbing_stairs";

describe("climbingStairs", () => {
	test("climbStairsByRecursion - 2 = 2", () => {
		const result = climbStairsByRecursion(2);
		expect(result).toBe(2);
	});

	test("climbStairsByRecursion - 3 = 3", () => {
		const result = climbStairsByRecursion(3);
		expect(result).toBe(3);
	});

	test("climbStairsByRecursion - 4 = 5", () => {
		const result = climbStairsByRecursion(4);
		expect(result).toBe(5);
	});

	test("climbStairsByLoop - 2 = 2", () => {
		const result = climbStairsByLoop(2);
		expect(result).toBe(2);
	});

	test("climbStairsByLoop - 3 = 3", () => {
		const result = climbStairsByLoop(3);
		expect(result).toBe(3);
	});

	test("climbStairsByLoop - 4 = 5", () => {
		const result = climbStairsByLoop(4);
		expect(result).toBe(5);
	});
});
