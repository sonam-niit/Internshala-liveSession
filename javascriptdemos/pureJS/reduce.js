//reduce method is basically executes a reducer function on each elementof 
//the array and returns a single output value

const message=["programming","is","my","hobby"];

//my reducer function
function tojoinStrings(acc,value){
    return acc+" " +value;
}

let newMessage= message.reduce(tojoinStrings);
console.log(newMessage);

const numsArray=[1,2,3,4,5,6,7,8,9,10];

let sum= numsArray.reduce((acc,value)=>{
    return acc+value;
})
console.log("Result ", sum)