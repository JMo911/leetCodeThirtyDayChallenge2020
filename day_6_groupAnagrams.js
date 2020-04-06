// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

var groupAnagrams = function(strs) {
    //create dict with counts of letters in each string
    //if other dict values match the first, then create array with those strings for the return
    const my_dict = {};
    // let lettersObject = {}, currentString;
    for (let i = 0; i < strs.length; i++) {
        let lettersObject = {};
        // currentString = strs[i];
        for (let j = 0; j < strs[i].length; j++) {
            (lettersObject[strs[i][j]]) ? lettersObject[strs[i][j]]++: lettersObject[strs[i][j]] = 1;
            // my_dict[strs[i]] = lettersObject;
            // console.log(lettersObject)
        }
        my_dict[strs[i]] = lettersObject;
        // my_dict[strs[i]] = lettersObject;
    }
    console.log(my_dict)

};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);