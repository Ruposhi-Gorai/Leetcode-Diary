var productExceptSelf = function(nums) {
    let zeroCount = 0;
    let totalProduct = 1;

    for (let num of nums) {
        if (num === 0) zeroCount++;
        else totalProduct *= num;
    }

    return nums.map(num => {
        if (zeroCount > 1) return 0;
        if (zeroCount === 1) return num === 0 ? totalProduct : 0;
        return totalProduct / num;
    });
};
