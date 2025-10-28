
var singleNumber = function(nums) {
    let map = {}
    for(let v of nums){
        if(map[v]){
        map[v] += 1
    }
    else{
        map[v] = 1
    }
        
    }
     let singleNum = Object.entries(map).filter((v)=> v[1] == 1)
     return Number(singleNum[0][0])
};