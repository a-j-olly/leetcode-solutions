// https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

export function majorityElementSort(nums: number[]): number {
	nums.sort();
	return nums[Math.ceil(nums.length / 2)];
}

export function majorityElementMap(nums: number[]): number {
	let result: number = 0;
	let objMap: { [key: number]: number } = {};

	for (let i = 0; i < nums.length; i++) {
		if (objMap[nums[i]] !== undefined) {
			objMap[nums[i]]++;
		} else {
			objMap[nums[i]] = 1;
		}

		if (objMap[nums[i]] === Math.ceil(nums.length / 2)) {
			result = nums[i];
			break;
		}
	}

	return result;
}

// https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
export function majorityElementLinear(nums: number[]): number {
	let m: number = 0;
	let counter = 0;

	for (let i = 0; i < nums.length; i++) {
		if (!counter) {
			m = nums[i];
			counter++;
		} else if (m === nums[i]) {
			counter++;
		} else {
			counter--;
		}
	}

	return m;
}
