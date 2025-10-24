var moveZeroes = function(nums) {
   let nonZero = []
   for(let v of nums){
    v !== 0 ? nonZero.push(v) : v
   }
   for(i = 0 ; i< nonZero.length ; i++){
    nums[i] = nonZero[i]
   }
   for(i = nonZero.length; i < nums.length ; i++){
    nums[i] = 0;
   }
    
};