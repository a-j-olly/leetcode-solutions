// https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
// Perform the merge in-place on the first of the two arrays.

export function mergeSortedArray(
	nums1: number[],
	m: number,
	nums2: number[],
	n: number
): number[] {
	if (n === 0) return nums1;

	for (let i = 0; i < n; i++) {
		nums1[m + i] = nums2[i];
	}

	nums1.sort();
	return nums1;
}

// nums1 = [1,2,3,0,0,0]
// m = 3

// nums2 = [2,5,6]
// n = 3

/**
 Do not return anything, modify nums1 in-place instead.
 */
export function mergeSortedArrayPointers(
	nums1: number[],
	m: number,
	nums2: number[],
	n: number
): number[] {
	let p1: number = m - 1;
	let p2: number = n - 1;
	let k: number = nums1.length - 1;

	while (p2 >= 0) {
		if (nums1[p1] > nums2[p2]) {
			nums1[k] = nums1[p1];
			p1--;
		} else {
			nums1[k] = nums2[p2];
			p2--;
		}
		k--;
	}

	return nums1;
}
