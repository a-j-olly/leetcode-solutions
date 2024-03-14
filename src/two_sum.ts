// https://leetcode.com/problems/two-sum/
// O(n)
export function twoSumByDiff(nums: number[], target: number): number[] {
	let indices: { [key: string]: number } = {};
	let response: number[] = [];

	for (let [index, num] of nums.entries()) {
		const difference = target - num;
		if (indices[difference] !== undefined) {
			response = [index, indices[difference]!];
		} else {
			indices[num] = index;
		}
	}

	return response;
}

// O(n^2)
export function twoSumByLoop(nums: number[], target: number): number[] {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
	return [];
}
