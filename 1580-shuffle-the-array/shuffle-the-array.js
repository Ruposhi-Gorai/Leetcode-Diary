/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {

// let n = nums.length ;
    // console.log(ans)
    let arr1 = []
    let arr2 = []
    let ans = []

    for(let i = 0 ; i < n ; i++){
        arr1.push(nums[i])
    }
        for(let j = n; j < 2*n  ; j++){
        arr2.push(nums[j])
    }
    for(let k = 0 ; k < n; k++){
       ans.push(arr1[k]) 
       ans.push(arr2[k])
    }
    // console.log(arr1)
    // console.log(arr2)
    // console.log(ans)
    return ans
    
};