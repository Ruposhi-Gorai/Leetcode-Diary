/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) { //found new unique element 
            i++;
            nums[i] = nums[j]; //move it to the next unique element 

        }

    }

    return i + 1; //count of unique elements
}