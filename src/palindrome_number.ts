// https://leetcode.com/problems/palindrome-number/description/
// Given an integer x, return true if x is a palindrome, and false otherwise.

export function isPalindromeLoop(x: number): boolean {
	let str = x + "";
	let revStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		revStr += str[i];
	}
	console.log(str, revStr);
	return str === revStr;
}

export function isPalindromeArray(x: number): boolean {
	let str = x + "";
	let arr = str.split("");
	arr.reverse();
	let revStr = arr.join("");
	return str === revStr;
}

export function isPalindromeNumber(x: number): boolean {
	// store the original number
	const num = x;

	// if number is negative return false
	if (x < 0) return false;

	let ans = 0;
	// to reverse the number we remove the
	// last digit and add it to another variable
	// we keep doing this until we've 0 left
	while (x > 0) {
		// modulo operator gives us the last digit
		const last_digit = x % 10;

		// for us to reverse the number we need to
		// keep adding the number at 10 places more
		// than the previous one, so keep multiplying
		// by 10 and adding the last digit

		// suppose 123 is our number
		// so, last digit will be 3
		// and ans = (ans * 10)
		// so ans = (0 * 10) + 3 = 3
		// and x = 123/10 = 12(we're doing floor)

		// now, x = 12, so last_digit=2
		// ans = (3*10)+2 = 30+2 = 32
		// x = 12/10 = 1

		// now, x = 1, so last_digit=1
		// ans = (32*10)+1 = 320+1 = 321
		// x = 1/10 = 0
		// and we're out of while loop
		ans = ans * 10 + last_digit;
		x = Math.floor(x / 10);
	}

	return num === ans;
}