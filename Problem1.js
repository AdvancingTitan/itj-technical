/* Given a list nums of n integers where nums[i] is in the range [1, list length], write a function
that solves the following problem; return a list of all the integers in the range [1, list length]
that do not appear in nums. */

function whereAreThey(nums){
    const uniqueValues = new Set(nums);
    let missingNums = [];

    for (let i = 1; i < nums.length; i++){
        if (!uniqueValues.has(i)){
            missingNums.push(i);
        }
    }
    return missingNums;
}

let listex = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(whereAreThey(listex));