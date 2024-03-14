// https://leetcode.com/problems/sum-of-two-integers/description/

export function twoSumBinary(a: number, b: number): number {
	while (b != 0) {
		/**
		 * To solve this problem, we use bitwise operations
		 * and break the problem into two parts.
		 *
		 * Binary operators used:
		 * & (AND) - produces a digit of 1 if both numbers have a digit of 1
		 * ^ (XOR) - produces a digit of 1 only if one number (not both) have a digit of one
		 * << (Left Shift) - adds one binary zero onto the number; increments operand.
		 *
		 * Carry - this is the binary number that is 'carried' to the new number. For example: adding 1000 + 1000 would produce 10000 after the bit manipualtion is done
		 * Addition - this is the actual addition done with the XOR operator. If one 1 exists, the digit is kept. We add this to the carry.
		 *
		 * This function is looped to add the carry onto the number with XOR addition - as we can't do it easily otherwise - and accounts for edge cases.
		 *
		 *
		 */
		let carry = a & b;
		a = a ^ b;
		b = carry << 1;
	}
	return a;
}
