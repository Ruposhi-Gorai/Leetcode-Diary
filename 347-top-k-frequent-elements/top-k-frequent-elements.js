
var topKFrequent = function(nums, k) {

  let map = {};
  nums.forEach(v => {
    map[v] = (map[v] ?? 0) + 1;
  });
  let newArr = Object.entries(map); // [['1',3], ['2',2], ['3',4]]

  newArr.sort((a, b) => b[1] - a[1]); //sort in decending order

  let result = newArr.slice(0, k).map(pair => Number(pair[0])); //get keys of first k elements

  console.log(result);
  return result;
    
};