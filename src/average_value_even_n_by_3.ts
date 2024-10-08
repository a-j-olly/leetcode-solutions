export function averageEvenNBy3(nums: number[]) {
	// find values that are divisible by 3 and are even (divisible by 6)
	let vals = nums.filter((x) => {
		return x % 6 === 0;
	});

	return vals.length
		? Math.floor(vals.reduce((a, b) => a + b) / vals.length)
		: 0;
}

export function averageEvenNBy3Loop(nums: number[]) {
	// find values that are divisible by 3 and are even (divisible by 6)
	let count = 0;
	let sum = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] % 6 === 0) {
			sum += nums[i];
			count++;
		}
	}

	return Math.floor(sum / count);
}
