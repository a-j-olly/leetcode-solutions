// https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
// weird question

export function removeElementSplice(nums1: number[], val = 3): number {
	let k = nums1.length - 1;

	while (k >= 0) {
		if (nums1[k] === val) {
			nums1.splice(k, 1);
		}
		k--;
	}

	return nums1.length;
}

export function removeElementReplace(nums: number[], val: number): number {
	let k = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nums[k] = nums[i];
			k++;
		}
	}
	console.log(nums);
	return k;
}
