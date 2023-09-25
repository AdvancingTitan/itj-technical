/* Given a list of integers nums and an integer target, write a function that solves the following
problem; return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. */

function twoNumbersOneTarget (nums, target){
    const hashM = {}; // Pseudo-dictionary object to store numbers and their keys
    
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        
        // If the difference is in the dictionary, return its key and the current key
        if (Object.hasOwn(hashM, diff)) {
            return [hashM[diff], i];
        }
        hashM[nums[i]] = i;
    }
}

const numsEx = [2, 7, 11, 15];
const targetEx = 9;
console.log(twoNumbersOneTarget(numsEx, targetEx));