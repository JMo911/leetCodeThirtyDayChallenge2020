// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.



// var subArrayHelper = function(nums) {
//         let sum = nums[0]; 
//         let indice = 0; 
//         for (let i = 1; i < nums.length; i += 1) {
//             if (sum > sum + nums[i]) {
//                 console.log('nextARR', nums.slice(indice));
//                 return { nextArr: nums.slice(indice), value: sum };            
//             }
            
//             sum = sum + nums[i];
//             console.log('sum is ', sum);
//             indice = i + 1;
//         }

// }
//WORKING VERSION
// var maxSubArray = function(nums) {
//     let largestSum = Number.NEGATIVE_INFINITY;
//     for (let i = 0; i <= nums.length; i++) {
//         for (let j = 0; j <= nums.length; j++) {
//                 if(nums.slice(i,j).reduce((a, b) => a+b, 0) > largestSum && nums.slice(i,j).length >= 1) {
//                     largestSum = nums.slice(i,j).reduce((a, b) => a+b, 0);
//                 };
//         }
//     }
//     return largestSum; 
// };

// console.log(maxSubArray([-2, -1]));


//OPTIMIZATION ATTEMPT
// var maxSubArray2 = function(nums) {
//     let current;  
//     console.log('the subArray return value', subArrayHelper(nums))
//     const { nextArr, value } = subArrayHelper(nums)
//      if ( current > value && current !== undefined) {
//          return current
//      }
//     current = value;
//     maxSubArray2(nextArr);
// };

// console.log('this is the console.log', maxSubArray2([-2,1,-3,4,-1,2,1,-5,4]));

// RECURSIVE ATTEMPT - what's base case and variable input?



// var maxSubArray3 = function(nums) {
//     const current = { start: 0, sum: 0 }; 
//        let result = { start:0, end: 0, sum: 0  };

//        for (let i = 0; i < nums.length; i += 1) {
//            current.sum += nums[i];
           
//            if (current.sum > result.sum) {
//              result = { start: current.start, end: i, sum: current.sum };
//            }
//            if (current.sum < 0) {
//              current.sum = 0;
//              current.start = i + 1;
//            }
//        }
//    const { start, end, sum } = result;
//    const subArray = nums.slice(start, end);
//    return `subArray ${subArray} sum is ${sum}`
// };

// console.log(maxSubArray3([-2,1,-3,4,-1,2,1,-5,4]));


// const maxSubArray4 = (nums) => {
//     if (nums.length === 1) return nums[0];
//     const current = {start: 0, sum: null}
//     let result = {start: 0, sum: Number.NEGATIVE_INFINITY}

//     for (let i = 0; i < nums.length; i++) {
//         current.sum += nums[i];
//         if (current.sum > result.sum) {
//             result.sum = current.sum
//         }

        
//     }
//     return result.sum;
// }

// console.log(maxSubArray4([-2,1,-3,4,-1,2,1,-5,4]))


// const maxSubArray = (nums) => {
//     let largestSum = Number.NEGATIVE_INFINITY;
//     function helper(helperInput) {
//         if (helperInput.length === 0) {
//             return
//         }
//     }
//     helper(nums)
//     return largestSum;
// }

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

const tutorial = (nums) => {
    let solution = nums[0]; 
    for (let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i] + nums[i-1])
        solution = Math.max(solution, nums[i])
    }
    return solution; 
}

console.log(tutorial([-2,1,-3,4,-1,2,1,-5,4]))