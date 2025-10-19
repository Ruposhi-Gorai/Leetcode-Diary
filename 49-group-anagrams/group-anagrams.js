/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for(let v of strs ){
        let sortedV = v.split('').sort().join('')

        if(!map[sortedV]){
           map[sortedV] = []
        }
         map[sortedV].push(v)

        
    }
    return Object.values(map)


    
};