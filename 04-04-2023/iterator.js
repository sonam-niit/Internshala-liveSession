//using Symbol.iterator() you can make any object as iterable object
let str= "Sonam Soni";
let itr= str[Symbol.iterator]();

// for(let x of itr){
//     console.log(x)
// }

while(true){
    const result= itr.next();
    if(result.done) break;
    console.log(result.value);
}


// const arr=[1,2,3];

// //get the iterator object call Symbol.Iterator method
// const myIterator= arr[Symbol.iterator]();

// console.log(myIterator.next())
// console.log(myIterator.next())
// console.log(myIterator.next())
// console.log(myIterator.next())