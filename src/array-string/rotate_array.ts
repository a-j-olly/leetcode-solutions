// https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Modify nums in-place.

export function rotateArray(nums: number[], k: number): number[] {
	return nums.splice(0, 0, ...nums.splice(-k, k));
}
