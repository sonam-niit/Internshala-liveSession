const array=[10,20,30,40,50];
console.log(array);
//print array using for loop
for(let i=0;i<array.length;i++){
    console.log(`Element ${i+1} ${array[i]}`);
}
//let's print with for of loop
for(let num of array){
    console.log(num);
}
console.log("using for each loop")
array.forEach((item,index)=>{
    console.log(`Element ${index+1} item`)
})
//print all elements by multiplying with 2
array.map((item)=>{console.log(item*2)});

console.log(array.map((item)=> item*2)) //item*2 is returned value
console.log(array.map((item)=>{
    return item*2
}))
//you have to mentioned what you wnat to return
//***********FIND Method***********/

console.log(array.find((item)=>{
    return item>=40; //returning only one element
}))

console.log(array.filter((item)=>{
    return item>=40; //returning an array
}))

console.log(array.filter((item)=>{
    return item%4==0; //returning an array of numbers which are divisible by zero
}))

//find Index
console.log(array.findIndex((item)=> item==40))
//check all the numbers are divisible by 5 or not
console.log(array.every((item)=>item%4==0))