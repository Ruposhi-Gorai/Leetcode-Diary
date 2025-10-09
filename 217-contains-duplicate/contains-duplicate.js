var containsDuplicate = function(nums) {

let uniqueSet = new Set(nums);

if(uniqueSet.size != nums.length){
    return true;
}else if (uniqueSet.size == nums.length){
    return false;
}

    
};