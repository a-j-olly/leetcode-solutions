import {
	isPalindromeLoop,
	isPalindromeArray,
	isPalindromeNumber,
} from "../src/palindrome_number";
describe("palindromeNumber", () => {
	test("isPalindromeLoop - x = 121", () => {
		const result = isPalindromeLoop(121);
		expect(result).toBe(true);
	});

	test("isPalindromeLoop - x = -121", () => {
		const result = isPalindromeLoop(-121);
		expect(result).toBe(false);
	});

	test("isPalindromeLoop - x = 121", () => {
		const result = isPalindromeLoop(10);
		expect(result).toBe(false);
	});

	test("isPalindromeArray - x = 121", () => {
		const result = isPalindromeArray(121);
		expect(result).toBe(true);
	});

	test("isPalindromeArray - x = -121", () => {
		const result = isPalindromeArray(-121);
		expect(result).toBe(false);
	});

	test("isPalindromeArray - x = 121", () => {
		const result = isPalindromeArray(10);
		expect(result).toBe(false);
	});

	test("isPalindromeNumber - x = 121", () => {
		const result = isPalindromeNumber(121);
		expect(result).toBe(true);
	});

	test("isPalindromeNumber - x = -121", () => {
		const result = isPalindromeNumber(-121);
		expect(result).toBe(false);
	});

	test("isPalindromeNumber - x = 121", () => {
		const result = isPalindromeArray(10);
		expect(result).toBe(false);
	});
});
