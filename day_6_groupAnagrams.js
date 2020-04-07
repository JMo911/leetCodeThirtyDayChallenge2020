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
    //first see if the two words have all of the same letters
    //then see if they have the same amount of those letters
    const my_dict = {}, resultArrays = [];


    for (let i = 0; i < strs.length; i++) {
        let lettersObject = {};
        for (let j = 0; j < strs[i].length; j++) {
            (lettersObject[strs[i][j]]) ? lettersObject[strs[i][j]]++: lettersObject[strs[i][j]] = 1;
        }
        my_dict[[i]] = lettersObject;
    }
    let anagramFound = true;
    Object.keys(my_dict[0]).forEach(e =>{
        if(my_dict[0][e] !== my_dict[3][e]) {
            anagramFound = false;
        } 
    })
    resultArrays.push([Object.keys(my_dict[0]).join(''), Object.keys(my_dict[3]).join('')])
    console.log(resultArrays)

    
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);