// https://leetcode.com/problems/contains-duplicate/
// O(n)
export function containsDuplicateWithSet(nums: number[]): boolean {
	const set = new Set(nums);
	return set.size !== nums.length;
}

// O(n)
export function containsDuplicateWithSetAlt(nums: number[]): boolean {
	let set = new Set();
	for (let x of nums) {
		// short circuits the loop at the first instance of a duplicate
		if (set.has(x)) return true;
		set.add(x);
	}
	return false;
}

// O(n∗log(n))
function containsDuplicateWithMap(nums: number[]): boolean {
	const map = new Map();

	for (let num of nums) {
		if (map.get(num) !== undefined) {
			return true;
		}

		map.set(num, 1);
	}

	return false;
}

// O(n) - pretty sure this is the most efficient solution
export function containsDuplicateWithObj(nums: number[]): boolean {
	let obj: { [key: number]: number } = {};

	for (let num of nums) {
		if (obj[num] !== undefined) {
			return true;
		}

		obj[num] = 1;
	}

	return false;
}

// O(n∗log(n))
export function containsDuplicateWithSort(nums: number[]): boolean {
	const sorted = nums.sort((a, b) => a - b);
	for (let i = 0; i < sorted.length - 1; i++) {
		if (sorted[i] === sorted[i + 1]) {
			return true;
		}
	}
	return false;
}
