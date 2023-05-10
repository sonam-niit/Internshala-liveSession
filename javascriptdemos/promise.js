let myPromise= new Promise((resolve,reject)=>{

    let num=46;
    if(num%5==0){
        resolve("Passed..!!")
    }else{
        reject("Not Divisible")
    }
       
});

// myPromise
// .then((value)=>console.log(value))
// .catch((error)=>console.log(error))

const test= async ()=>{
    try{
        const resp=await myPromise;
        console.log("Response received ",resp)
    }
    catch(error){
        console.log("Error occured ",error)
    } 
}
test();