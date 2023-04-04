//generators you can create your own iterators by writing a function

function* myDataGenerator (){
    yield 'hii';
    yield 'Helloo..';
    yield 'How are you..?';
}

//yield keyword 

const myData= myDataGenerator();
while(true){

    let result=myData.next();
    if(result.done) break;
    console.log(result.value);
}
