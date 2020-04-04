// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.


// Hide Hint #1  
// In-place means we should not be allocating any space for extra array. But we are allowed to modify the existing array. However, as a first step, try coming up with a solution that makes use of additional space. For this problem as well, first apply the idea discussed using an additional array and the in-place solution will pop up eventually.
//    Hide Hint #2  
// A two-pointer approach could be helpful here. The idea would be to have one pointer for iterating the array and another pointer that just works on the non-zero elements of the array.

//could create a hashmap with all 0 index positions, then 

//if a number is 0, move it to the 

// var moveZeroes = function(nums) {
//     let firstIndexPosition = 0, 
//         secondIndexPosition = 1, temp;
//     while (secondIndexPosition < nums.length) {
//         //find my next non-zeroe and flip flop with first position
//         if (nums[firstIndexPosition] === 0 && nums[secondIndexPosition] !==0) {
//             temp = nums[firstIndexPosition];
//             nums[firstIndexPosition] = nums[secondIndexPosition];
//             nums[secondIndexPosition] = temp
//         }
//         firstIndexPosition++;
//         secondIndexPosition = firstIndexPosition + 1;
//     }
//     console.log(nums);
// };

// moveZeroes([0,1,0,3,12])


//all we care about is getting non zeroes to the front of the array. look at first number, if it's not zero -> ok, 
//move to second number if it's not zero -> ok, if it is zero mark it's index and look for the next number in the array that's not 0 and flip flop them
//make sure process continues from the next index number (i.e. mark the next 0, look for next non zero and continue)
// var moveZeroes = function(nums) {
//     let zeroIndexPosition, nonZeroIndexPosition, temp;
//     for (let i = 0; i < nums.length; i++) {
        
//     }
//     console.log(nums);
// };

// moveZeroes([0,1,0,3,12])

// const helper = function (arr) {
    
// }



var moveZeroes = function(nums) {
    let newArray = [];
    let zeroCounter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i,1);
            i--;
            zeroCounter++;
        } 
    }
    for (let j = 0; j < zeroCounter; j++) {
        nums.push(0);
    }

    return nums;
};

console.log(moveZeroes([0,0,1]));