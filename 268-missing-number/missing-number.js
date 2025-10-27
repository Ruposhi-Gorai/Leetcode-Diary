
var missingNumber = function(nums) {
     let n = nums.length 
    let expectedSum = n * (n+1)/2;
    let sum = nums.reduce((s, v)=> s + v , 0);
    let missingNumber = expectedSum - sum
    return missingNumber
};