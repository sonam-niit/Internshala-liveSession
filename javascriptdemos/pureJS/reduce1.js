let users=[
    {name:"alex",age:55},
    {name:"bob",age:22},
    {name:"catty",age:55},
    {name:"devid",age:19},
    {name:"Michale ",age:19},
]

function filter1(obArray,property){
    return obArray.reduce((acc,value)=>{
        let key= value[property];
        if(!acc[key]){
            acc[key]=[];
        }
        acc[key].push(value);
        return acc;
    },{})
}
let ageGroup= filter1(users,"age");
console.log(ageGroup);