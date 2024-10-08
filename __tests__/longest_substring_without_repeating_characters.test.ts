import { longestSubstringWithoutRepeatingChars } from "../src/longest_substring_without_repeating_characters";

describe("longestSubstringWithoutRepeatingCharacters", () => {
	test("longestSubstr - 'abcabcbb' = 3", () => {
		const result = longestSubstringWithoutRepeatingChars("abcabcbb");
		expect(result).toBe(3);
	});

    test("longestSubstr - 'bbbbb' = 1", () => {
		const result = longestSubstringWithoutRepeatingChars("bbbbb");
		expect(result).toBe(1);
	});

    test("longestSubstr - 'pwwkew' = 3", () => {
		const result = longestSubstringWithoutRepeatingChars("pwwkew");
		expect(result).toBe(3);
	});

    test("longestSubstr - 'abcdae' = 5", () => {
		const result = longestSubstringWithoutRepeatingChars("abcdae");
		expect(result).toBe(5);
	});
});
