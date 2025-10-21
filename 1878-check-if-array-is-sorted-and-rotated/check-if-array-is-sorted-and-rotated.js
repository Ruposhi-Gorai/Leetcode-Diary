/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {

let count = 0;
let n = nums.length

for(i = 0; i<n; i++){
    if(nums[i] > nums[(i+1)% n]){
        count ++;
    }
}
    
    return count <=1;
};