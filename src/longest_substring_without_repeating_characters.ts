// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// O(n)
export function longestSubstringWithoutRepeatingChars(str: string): number {
	let length: number = 0;
	let charMap = new Map();
	let leftPointer = 0;

	for (let rightPointer = 0; rightPointer < str.length; rightPointer++) {
		const char = str[rightPointer];

		if (charMap.has(char) && charMap.get(char) >= leftPointer) {
			leftPointer = charMap.get(char) + 1;

		}
        length = Math.max(length, rightPointer - leftPointer + 1)

		charMap.set(char, rightPointer);
	}
	return length;
}
