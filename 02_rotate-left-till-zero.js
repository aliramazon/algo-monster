/* Create a function that takes an integer array containing one 0 and rotates the array counterclockwise so that the 0 ends up at the front of the array. */

/* 
    Time Complexity:
        Each shift() is O(N) in JS, because all elements must be reindexed.
        In the worst case, zero is at the end and you may do up to n shifts
*/
const rotateLeftTillZero = (nums) => {
    while (nums[0] !== 0) {
        nums.push(nums.shift());
    }

    return nums;
};
