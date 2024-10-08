// https://leetcode.com/problems/climbing-stairs/description/
const cache: number[] = [];

// O(n^2)
export function climbStairsByRecursion(n: number): number {
	if (n <= 2) return n;
	if (!cache[n]) {
		cache[n] = climbStairsByRecursion(n - 2) + climbStairsByRecursion(n - 1);
	}
	return cache[n];
}

// O(n)
export function climbStairsByLoop(n: number): number {
	if (n <= 2) {
		return n;
	}
	let n1 = 1;
	let n2 = 2;
	let x = 0;
	for (let i = 2; i < n; i++) {
		x = n1 + n2;
		n1 = n2;
		n2 = x;
	}
	return x;
}
