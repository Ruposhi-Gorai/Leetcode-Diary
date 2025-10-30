
var majorityElement = function(nums) {
    let map = {}
    let n = nums.length
    let k = Math.floor(n/2)
         for(let v of nums){
            if(map[v]){
                map[v] += 1
            }else{
                map[v]=1
            }

         }
    let count = Object.entries(map)
    for(let s of count){
     if(s[1] > k ){
      return Number(s[0])
        
    }
    }
    
};