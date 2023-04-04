function helloWorld(){

    function greeting(){
        console.log(data)
    }
    //variable declared in a function scope
    var data="Hello World..!!!"; //variable declared after a function

    return greeting;
}

let result =helloWorld();
result(); //data accessible here