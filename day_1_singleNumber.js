// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var singleNumber = function(nums) {
    const my_dict = {};
    let final_num = 0;
    for (let i = 0; i < nums.length; i++) {
        (my_dict[nums[i]] >= 1) ? my_dict[nums[i]]++ : my_dict[nums[i]] = 1
    }
    Object.keys(my_dict).forEach(e => {
        if (my_dict[e] == 1) {
            final_num = e;
        }
    })
    return final_num;
};

console.log(singleNumber([2,2,1]));