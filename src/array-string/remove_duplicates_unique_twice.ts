// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150
// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice.
// The relative order of the elements should be kept the same.
export function removeDuplicatesByPointers(nums: number[]): number {
	let k = 0;
	let j = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== nums[k]) {
			nums[k + 1] = nums[i];
			j = 1;
			k++;
		} else {
			if (j === 1) {
				k++;
			}
			j++;
		}
	}
	return k + 1;
}

export function removeDuplicates(nums: number[]): number {
	let j = 2;

	for (let i = 2; i < nums.length; i++) {
		if (nums[i] !== nums[j - 2]) {
			nums[j++] = nums[i];
		}
	}

	return j;
}
