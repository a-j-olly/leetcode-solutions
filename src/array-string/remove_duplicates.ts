// https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150
// Remove the duplicates from the array in place, and return the number of unique elements.

export function removeDuplicatesByPointers(nums: number[]): number {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]!== nums[k]) {
            nums[k + 1] = nums[i];
            k++;
        }
    }
    return k + 1;
}
