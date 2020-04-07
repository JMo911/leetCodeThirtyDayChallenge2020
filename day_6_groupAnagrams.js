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

// var groupAnagrams = function(strs) {
//     //create dict with counts of letters in each string
//     //if other dict values match the first, then create array with those strings for the return
//     //first see if the two words have all of the same letters
//     //then see if they have the same amount of those letters
//     const my_dict = {}, resultArrays = [];


//     for (let i = 0; i < strs.length; i++) {
//         let lettersObject = {};
//         for (let j = 0; j < strs[i].length; j++) {
//             (lettersObject[strs[i][j]]) ? lettersObject[strs[i][j]]++: lettersObject[strs[i][j]] = 1;
//         }
//         my_dict[i] = lettersObject;
//     }
    
//     for ( let j = 0; j < Object.keys(my_dict).length; j++) {
//         let anagramsArray = [];
//         let currentTerm = my_dict[j]
//         for ( let k = j+1; k < Object.keys(my_dict).length; k++) {
//             let comparisonTerm = my_dict[k];
//             diff(currentTerm, comparisonTerm)
//             // console.log('comparison term ',comparisonTerm) 
//             // if (currentTerm)

//             // Object.keys(my_dict[j]).forEach(e =>{
//             //     if(my_dict[j][e] === my_dict[k][e]) {
//             //         anagramsArray.push(Object.keys(my_dict[j]).join(''), Object.keys(my_dict[k]).join(''))
//             //     } 
//             // })
//         }
//         // console.log(anagramsArray) 
//     }
//     // let anagramFound = true;
//     // Object.keys(my_dict[0]).forEach(e =>{
//     //     if(my_dict[0][e] !== my_dict[3][e]) {
//     //         anagramFound = false;
//     //     } 
//     // })
//     // resultArrays.push([Object.keys(my_dict[0]).join(''), Object.keys(my_dict[3]).join('')])
    

    
// };

// groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

// function checkMatch (word, idx) {
//     if(word === )
// }





// idx 0 ["eat", "tea", "tan", "ate", "nat", "bat"];
// if (i === 0 push)
// if ( sort/ spilt does it match) 
// push
// splice at current, 

// idx 0 ["tan", "nat", "bat"]
// idx 0 ["bat"]

// input.forEach(w => {
//   const sortedAssortedArray = w.split('').sort().join('');
//   sortedAssortedArray.filte
// })




//PAIR W/ JACK
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
var groupAnagrams = function(strs, r) {
  const results = r ? r : [];
  let group = [];
  if (strs.length === 0) {
      return [['', '']];
  }
  if ( strs.length === 1) {
      results.push([strs[0]])
      return results
  }
      for (let i = 1; i < strs.length; i++) {
          if (!group.length) {
              group.push(strs[0])  
          }
          var toMatch = strs.length > 1 ? strs[0].split('').sort().join('') : strs[0];
          if (strs[i].split('').sort().join('') === toMatch) {
              group.push(strs[i]);
          } 
      }
  results.push(group);
  const theNewStrs = strs.filter(item => !group.includes(item))
  return groupAnagrams(theNewStrs, results);
}

const winner = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log('the winner', winner);






















//ATTEMPT 2 - SORT FIRST
// var groupAnagrams = function(strs) {
//     // const my_dict = {};
//     let sortedArray = [];
//     for (let i = 0; i < strs.length; i++) {
//         sortedArray.push(strs[i].split('').sort().join(''))
//     }
//     // let matches = [];
//     for (let j = 0; j < sortedArray.length; j++) {
//         for (let k = 0; k < sortedArray.length; k++) {
//             //return index positions of all matches
//             if (sortedArray[j] === sortedArray[k]) {
//                 matches.push([j, k])
//             }
//         }
        
//     }
//     // console.log(matches)

// }

// groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);