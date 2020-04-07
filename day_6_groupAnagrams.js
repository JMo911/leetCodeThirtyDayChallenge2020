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
        my_dict[strs[i]] = lettersObject;
    }
    // console.log(my_dict)
    for (let k = 0; k < Object.keys(my_dict).length; k++) {
        let currentValues = my_dict[Object.keys(my_dict)[k]]
        let anagramArray = [];
        anagramArray.push(Object.keys(my_dict)[k])
        for (let l = 0; l < Object.keys(my_dict).length; l++) {
            if (my_dict[Object.keys(my_dict)[k]] === my_dict[Object.keys(my_dict)[l]]) {
                anagramArray.push(Object.keys(my_dict)[l])
            }
        }
        resultArrays.push(anagramArray);
    }

    console.log(resultArrays);
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);