
var topKFrequent = function(nums, k) {

  let map = {};

  // Step 1️⃣: Count frequency
  nums.forEach(v => {
    map[v] = (map[v] || 0) + 1;
  });

  // Step 2️⃣: Convert to array of [key, value] pairs
  let newArr = Object.entries(map); // [['1',3], ['2',2], ['3',4]]

  // Step 3️⃣: Sort by value (frequency) in descending order
  newArr.sort((a, b) => b[1] - a[1]);

  // Step 4️⃣: Take first k keys
  let result = newArr.slice(0, k).map(pair => Number(pair[0]));

  console.log(result);
  return result;
    
};