
var rotate = function(nums, k) {
    k = k % nums.length //
    let rotateElements = []
    for(let i = 0; i<k; i++){
     let r = nums.pop()
     rotateElements.push(r)

    }

    rotateElements.reverse()
    nums.unshift(...rotateElements)
};
