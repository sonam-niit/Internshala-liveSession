const array=[1,2,3,4,5,6,7,8,9,10];

        //Process My Array
        const resultArray=array.map((ele)=>ele+2000);
        console.log(resultArray)

        //Data Filter
        const array1=[13,67,89,34,60,23];
        const passed= array1.filter((ele)=>ele>=35);
        console.log(passed);

        //if you want to find only first match and return value
        const firstFailed= array1.find((ele)=>ele<35);
        console.log(firstFailed)

       if( array1.some((ele)=>ele>=18)){
        console.log("All are valid for vote");
       }else{
        console.log("Few are not valid for vote")
       }
       //reduce to reduce all elements to one result
       const sum=array.reduce((acc,value)=>acc+value);
       console.log(sum)

        //Iterations
        // array.forEach((ele,ind)=>{
        //      console.log("Index: "+ind+" Value: "+ele)
        // })
        // for(let i=0;i<array.length;i++){
        //     console.log(`Index: ${i} value: ${array[i]}`)
        // }
        // for(let x of array){
        //     console.log(x) //element 
        // }