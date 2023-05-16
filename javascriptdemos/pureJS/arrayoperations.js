const nums=[3,4,5,6,7];
//get the element from some index
console.log("Element at index 3 ", nums.at(3))
console.log("Element at index 3 ", nums[3])
//remove element from last index
console.log(nums.pop());
console.log("After POP, ",nums);
//insert new element at last index
nums.push(8);
console.log("After Push, ",nums);
//remove element from first index (0)
nums.shift();
console.log("After Shift, ",nums);
//insert new element at first index
nums.unshift(10);
console.log("After UnShift, ",nums);
//all elements i want to fill up with same number
nums.fill(3,1,3); //value, start index, end index
console.log("After Fill, ",nums);
//if you wnat to check weather the number is awailable
console.log(nums.includes(8));
//if you want to reverse your elements
console.log("After reverse, ",nums.reverse());