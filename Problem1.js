/* Given a list nums of n integers where nums[i] is in the range [1, list length], write a function
that solves the following problem; return a list of all the integers in the range [1, list length]
that do not appear in nums. */

function whereAreThey(nums){
    const uniqueValues = new Set(nums); //Sets ensure only unique values are saved
    let missingNums = [];

    for (let i = 1; i <= nums.length; i++){
        if (!uniqueValues.has(i)){ //If the number is not in the set, add it to the answer list
            missingNums.push(i);
        }
    }
    return missingNums;
}

let listEx = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(whereAreThey(listEx));
