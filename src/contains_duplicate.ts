// https://leetcode.com/problems/contains-duplicate/
// O(n)
export function containsDuplicateWithSet(nums: number[]): boolean {
	const set = new Set(nums);
	return set.size !== nums.length;
}
