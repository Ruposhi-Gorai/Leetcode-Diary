/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
 if (strs.length === 0) return ""; //if empty array return empty string
  let prefix = strs[0]; // take the first word as initial prefix

  for (let i = 1; i < strs.length; i++) { // start from second word
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1); // shrink prefix
      if (prefix === "") return "";
    }
  }
  return prefix;
    
};
