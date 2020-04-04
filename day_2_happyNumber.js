// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let happiness = false;

    function helper(helper_n) {
        if (helper_n === 1) {
            happiness = true;
            return;
        };
        const num_array = helper_n.toString().split('')
        let new_num = 0;
        num_array.forEach(e => {
            new_num+= Math.pow(parseInt(e),2)
        })
        helper(new_num)
    }
    helper(n)
    return happiness;
};

console.log(isHappy(19));
// try{
//     isHappy(150)  
// }
// catch {
//     return false
// }
