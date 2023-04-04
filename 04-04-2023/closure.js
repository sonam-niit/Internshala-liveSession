function numGenerator(){
    var num=1//local 
    //prints that local variable in console
    function verify(){
        console.log(num); //is not a variable of its own
        //still it can access the variable of outer function
        //this access is happening because of clousure
    }

    num++; // num=num+1
    return verify; //function returning a function
}
var result= numGenerator();
result();