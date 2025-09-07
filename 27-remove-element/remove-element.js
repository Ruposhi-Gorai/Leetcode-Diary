var removeElement = function(nums, val) {
    let k = 0; // index for placing non-val elements

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // move element forward
            k++;
        }
    }

    return k; // number of elements not equal to val
};
